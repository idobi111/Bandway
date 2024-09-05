package com.mta.bandway.services;

import com.mta.bandway.api.domain.request.CarRentalDetailsDto;
import com.mta.bandway.api.domain.request.CarRentalRequestDto;
import com.mta.bandway.api.domain.response.AutoCompleteCityResponseDto;
import com.mta.bandway.api.domain.response.CarRentalResponseDto;
import com.mta.bandway.core.domain.car.*;
import com.mta.bandway.core.domain.car.auto.correct.AutoCompleteCarCity;
import com.mta.bandway.core.domain.car.auto.correct.CarDatum;
import com.mta.bandway.entities.CarRentalOrder;
import com.mta.bandway.repositories.CarRentalOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
public class CarRentalService {
    public static final int MAX_CAR_TO_SHOW = 10;
    private final String apiUrl;
    private final String carRentalApi;
    private final String carAutoComplete;
    private final String apiKey;
    private final RestTemplate restTemplate;
    private final CarRentalOrderRepository carRentalOrderRepository;

    @Autowired
    public CarRentalService(@Value("${carrental.api.url}") String apiUrl, @Value("${rapid.api.key}") String apiKey, RestTemplate restTemplate, CarRentalOrderRepository carRentalOrderRepository) {
        this.apiUrl = apiUrl;
        this.carRentalApi = "https://" + apiUrl + "/api/v1/cars/search-cars";
        this.carAutoComplete = "https://" + apiUrl + "/api/v1/cars/search-location";
        this.apiKey = apiKey;
        this.restTemplate = restTemplate;
        this.carRentalOrderRepository = carRentalOrderRepository;
    }

    //TODO: export to common
    private static String getDateTime(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(date);
    }

    private static String getCountry(CarDatum data) {
        String[] hierarchy = data.getHierarchy().split("\\|");
        return hierarchy[hierarchy.length - 1];
    }

    private static CarMetadata selectGroup(CarResourceData data, Groups groups) {
        return groups.getGroups().get(data.getGroup());
    }

    private static String buildCarLink(CarResourceData data) {
        return "https://www.skyscanner.com" + data.getDplnk();
    }

    private static String getSupplierLogoUrl(CarResourceData data) {
        return "https://logos.skyscnr.com/images/websites/" + data.getPrvId() + ".png";
    }

    private Map<String, CarAggregatedData> groupAndAggregate(List<CarRentalData> carInfoList) {
        return carInfoList.stream()
                .collect(Collectors.groupingBy(
                        CarRentalData::getGroupName,
                        Collectors.collectingAndThen(
                                Collectors.toList(),
                                (List<CarRentalData> list) -> {
                                    CarRentalData minPriceCarInfo = list.stream()
                                            .min(Comparator.comparingDouble(CarRentalData::getTotalPrice))
                                            .orElseThrow(NoSuchElementException::new);
                                    List<DealInfo> dealInfoList = list.stream()
                                            .map(carInfo -> DealInfo.builder()
                                                    .carLinks(carInfo.getCarLink())
                                                    .supplierNames(carInfo.getSupplierName())
                                                    .supplierLogos(carInfo.getSupplierLogo())
                                                    .price(carInfo.getTotalPrice())
                                                    .build())
                                            .collect(Collectors.toList());

                                    return CarAggregatedData.builder()
                                            .model(minPriceCarInfo.getModel())
                                            .pricePerDay(minPriceCarInfo.getPricePerDay())
                                            .dropOffAddress(minPriceCarInfo.getDropOffAddress())
                                            .dropOffPlaceName(minPriceCarInfo.getDropOffPlaceName())
                                            .pickUpAddress(minPriceCarInfo.getPickUpAddress())
                                            .pickUpPlaceName(minPriceCarInfo.getPickUpPlaceName())
                                            .image(minPriceCarInfo.getImage())
                                            .dealInfo(dealInfoList)
                                            .totalPrice(minPriceCarInfo.getTotalPrice())
                                            .seats(minPriceCarInfo.getSeats())
                                            .transmission(minPriceCarInfo.getTransmission())
                                            .fuelType(minPriceCarInfo.getFuelType())
                                            .carGroup(minPriceCarInfo.getCarGroup())
                                            .rentalPeriod(minPriceCarInfo.getRentalPeriod())
                                            .rating(minPriceCarInfo.getRating())
                                            .build();
                                }
                        )
                ));

    }

    public List<AutoCompleteCityResponseDto> getCityAutoComplete(String text) {
        HttpEntity<String> entity = new HttpEntity<>(createHeaders());
        String urlWithQuery = UriComponentsBuilder.fromHttpUrl(carAutoComplete).queryParam("query", text).toUriString();
        List<AutoCompleteCityResponseDto> result = new ArrayList<>();
        ResponseEntity<AutoCompleteCarCity> s = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, AutoCompleteCarCity.class);
        for (int i = 0; i < Objects.requireNonNull(s.getBody()).getData().size(); i++) {
            CarDatum data = s.getBody().getData().get(i);
            result.add(AutoCompleteCityResponseDto.builder().id(data.getEntityId()).name(data.getEntityName()).country(getCountry(data)).build());
        }
        return result;
    }

    public CarRentalResponseDto searchCarRental(CarRentalRequestDto requestCarRentalDto) {
        HttpEntity<String> entity = new HttpEntity<>(createHeaders());
        URI uri = UriComponentsBuilder.fromHttpUrl(carRentalApi).queryParam("pickUpEntityId", requestCarRentalDto.getPickupCity()).queryParam("dropOffEntityId", requestCarRentalDto.getDropoffCity()).queryParam("pickUpDate", getDateTime(requestCarRentalDto.getPickupStartDate())).queryParam("pickUpTime", requestCarRentalDto.getPickupTime()).queryParam("dropOffDate", getDateTime(requestCarRentalDto.getDropoffEndDate())).queryParam("dropOffTime", requestCarRentalDto.getDropoffTime()).queryParam("driverAge", requestCarRentalDto.getDriverAge()).queryParam("currency", "USD").build().toUri();
        Integer daysDuration = calcDaysDuration(requestCarRentalDto.getPickupStartDate(), requestCarRentalDto.getDropoffEndDate(), requestCarRentalDto.getPickupTime(), requestCarRentalDto.getDropoffTime());
        ResponseEntity<CarResponse> response = restTemplate.exchange(uri, HttpMethod.GET, entity, CarResponse.class);
        if (response.getBody() == null) {
            return CarRentalResponseDto.builder().build();
        }
        return createCarRentalResponseDto(response.getBody(), daysDuration, requestCarRentalDto.getPickupStartDate(), requestCarRentalDto.getDropoffEndDate());

    }

    private Integer calcDaysDuration(Date pickupStartDate, Date dropoffEndDate, String pickupTime, String dropoffTime) {
        Integer days = (int) TimeUnit.DAYS.convert(dropoffEndDate.getTime() - pickupStartDate.getTime(), TimeUnit.MILLISECONDS);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");

        LocalTime pickTime = LocalTime.parse(pickupTime, formatter);
        LocalTime dropTime = LocalTime.parse(dropoffTime, formatter);
        if (!pickupTime.equals(dropoffTime) && dropTime.isAfter(pickTime)) {
            days++;
        }
        return days;
    }

    private CarRentalResponseDto createCarRentalResponseDto(CarResponse responseBody, Integer daysDuration, Date checkIn, Date checkOut) {
        List<CarRentalData> cars = new ArrayList<>();
        double minPrice = Double.MAX_VALUE;
        double maxPrice = Double.MIN_VALUE;
        if (responseBody.getData() == null) {
            return CarRentalResponseDto.builder().build();
        }
        for (int i = 0; i < responseBody.getData().getQuotesCount(); i++) {
            CarResourceData data = responseBody.getData().getCarRentalData().get(i);
            Double basePrice = data.getPrice();
            Groups allCarsMetadata = responseBody.getData().getGroups();
            CarMetadata carMetadata = selectGroup(data, allCarsMetadata);
            String apiUrl = buildCarLink(data);
            if (basePrice != null && carMetadata != null) {
                minPrice = Math.min(minPrice, basePrice);
                maxPrice = Math.max(maxPrice, basePrice);
                cars.add(CarRentalData.builder()
                        .model(data.getOriginalCarName())
                        .pricePerDay(calcPricePerDay(data, daysDuration))
//                        .pickUpAddress(data.getAdds().getAddress())
//                        .pickUpPlaceName(routeInfo.getPickup().getName())
//                        .dropOffAddress(routeInfo.getDropoff().getAddress())
//                        .dropOffPlaceName(routeInfo.getDropoff().getName())
                        .image("https://logos.skyscnr.com/images/carhire/sippmaps/" + carMetadata.getImg())
                        .carLink(apiUrl)
                        .totalPrice(basePrice)
                        .pickUpPlaceName(extractPickUpDropNameFromUrl(apiUrl))
                        .dropOffPlaceName(extractPickUpDropNameFromUrl(apiUrl))
                        .rentalPeriod(daysDuration)
                        .rating(data.getVndrRating().getOverallRating())
                        .supplierName(data.getVndr())
                        .supplierLogo(getSupplierLogoUrl(data))
                        .seats(data.getSeat())
                        .carGroup(carMetadata.getCls())
                        .transmission(carMetadata.getTrans())
                        .totalPrice(data.getPrice())
                        .fuelType(Objects.equals(data.getFuelType(), "other") ? "gasoline" : data.getFuelType())
                        .groupName(data.getGroup()).build());
            }
        }
        if (cars.isEmpty()) {
            minPrice = 0.0;
            maxPrice = 0.0;
        }

        List<CarAggregatedData> aggregateData = groupAndAggregate(cars).values().stream().limit(MAX_CAR_TO_SHOW).toList();
        return CarRentalResponseDto.builder().carRentalData(aggregateData).minPrice(minPrice).maxPrice(maxPrice).checkIn(getDateTime(checkIn)).checkOut(getDateTime(checkOut)).build();
    }

    private Double calcPricePerDay(CarResourceData data, Integer daysDuration) {
        return data.getPrice() / daysDuration;
    }

    private HttpHeaders createHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("X-RapidAPI-Key", apiKey);
        headers.set("X-RapidAPI-Host", apiUrl);

        return headers;
    }

    public void saveCarRentalOrder(CarRentalDetailsDto carRentalDetailsDto) {

        carRentalOrderRepository.save(CarRentalOrder.builder()
                .userId(carRentalDetailsDto.getUserId())
                .rentalStartLocation(carRentalDetailsDto.getRentalStartLocation())
                .rentalEndLocation(carRentalDetailsDto.getRentalEndLocation())
                .rentalStartDate(carRentalDetailsDto.getRentalStartDate())
                .rentalEndDate(carRentalDetailsDto.getRentalEndDate())
                .orderDate(getDateTime(new Date()))
                .build());
    }

    private String extractPickUpDropNameFromUrl(String apiUrl) {
        Pattern pattern = Pattern.compile("pickup_name=([^&]*)");
        Matcher matcher = pattern.matcher(apiUrl);
        String pickupName = "";
        if (matcher.find()) {
            pickupName = matcher.group(1);
            pickupName = URLDecoder.decode(pickupName, StandardCharsets.UTF_8);
        }
        return pickupName;
    }
}