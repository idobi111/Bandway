package com.mta.bandway.services;

import com.mta.bandway.api.domain.request.CarRentalRequestDto;
import com.mta.bandway.api.domain.response.AutoCompleteCityResponseDto;
import com.mta.bandway.api.domain.response.CarRentalResponseDto;
import com.mta.bandway.core.domain.car.CarResponse;
import com.mta.bandway.core.domain.car.RouteInfo;
import com.mta.bandway.core.domain.car.SearchResult;
import com.mta.bandway.core.domain.car.VehicleInfo;
import com.mta.bandway.core.domain.car.auto.correct.AutoCompleteCarCity;
import com.mta.bandway.core.domain.car.auto.correct.CarCategory;
import com.mta.bandway.core.domain.car.auto.correct.CarDatum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

@Service
public class CarRentalService {
    private final String apiUrl;
    private final String carRentalApi;
    private final String carAutoComplete;
    private final String apiKey;
    private final RestTemplate restTemplate;
//    private final CarRentalOrderRepository carRentalOrderRepository;

    @Autowired
    public CarRentalService(@Value("${carrental.api.url}") String apiUrl, @Value("${rapid.api.key}") String apiKey, RestTemplate restTemplate) {
        this.apiUrl = apiUrl;
        this.carRentalApi = "https://" + apiUrl + "/car/search";
        this.carAutoComplete = "https://" + apiUrl + "/car/auto-complete";
        this.apiKey = apiKey;
        this.restTemplate = restTemplate;
//        this.carRentalOrderRepository = carRentalOrderRepository;
    }

    //TODO: export to common
    private static String getDateTime(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(date);
    }

    public List<AutoCompleteCityResponseDto> getCityAutoComplete(String text) {
        HttpEntity<String> entity = new HttpEntity<>(createHeaders());
        String urlWithQuery = UriComponentsBuilder.fromHttpUrl(carAutoComplete).queryParam("query", text).toUriString();
        List<AutoCompleteCityResponseDto> result = new ArrayList<>();
        ResponseEntity<AutoCompleteCarCity> s = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, AutoCompleteCarCity.class);
        for (int i = 0; i < Objects.requireNonNull(s.getBody()).getData().size(); i++) {
            CarDatum data = s.getBody().getData().get(i);
            result.add(AutoCompleteCityResponseDto.builder()
                    .id(data.getId())
                    .name(data.getCity())
                    .country(data.getCountry())
                    .build());
        }
        return result;
    }

    public List<CarRentalResponseDto> searchCarRental(CarRentalRequestDto requestCarRentalDto) {
        HttpEntity<String> entity = new HttpEntity<>(createHeaders());
        URI uri = UriComponentsBuilder.fromHttpUrl(carRentalApi)
                .queryParam("pickUpId", requestCarRentalDto.getPickupCity())
                .queryParam("dropOffId", requestCarRentalDto.getDropoffCity())
                .queryParam("pickUpDate", getDateTime(requestCarRentalDto.getPickupStartDate()))
                .queryParam("pickUpTime", requestCarRentalDto.getPickupTime())
                .queryParam("dropOffDate", getDateTime(requestCarRentalDto.getDropoffEndDate()))
                .queryParam("dropOffTime", requestCarRentalDto.getDropoffTime())
                .queryParam("driverAge", requestCarRentalDto.getDriverAge())
                .queryParam("carType", getCarTypeAsString(requestCarRentalDto.getCarType()))
                .queryParam("hasAirConditioning", requestCarRentalDto.getHasHairConditioner())
                .queryParam("currencyCode", "USD")
                .build().toUri();
        Integer daysDuration = calcDaysDuration(requestCarRentalDto.getPickupStartDate(), requestCarRentalDto.getDropoffEndDate(), requestCarRentalDto.getPickupTime(), requestCarRentalDto.getDropoffTime());
        ResponseEntity<CarResponse> response = restTemplate.exchange(uri, HttpMethod.GET, entity, CarResponse.class);
        if (response.getBody() == null) {
            return new ArrayList<>();
        }
        return createCarRentalResponseDto(response.getBody(), daysDuration);
    }

    private Integer calcDaysDuration(Date pickupStartDate, Date dropoffEndDate, String pickupTime, String dropoffTime) {
        Integer days = (int) TimeUnit.DAYS.convert(dropoffEndDate.getTime() - pickupStartDate.getTime(), TimeUnit.MILLISECONDS);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");

        // Parse the time strings into LocalTime objects
        LocalTime pickTime = LocalTime.parse(pickupTime, formatter);
        LocalTime dropTime = LocalTime.parse(dropoffTime, formatter);
        if (!pickupTime.equals(dropoffTime) && dropTime.isAfter(pickTime)) {
            days++;
        }
        return days;
    }


    private List<CarRentalResponseDto> createCarRentalResponseDto(CarResponse responseBody, Integer daysDuration) {
        List<CarRentalResponseDto> result = new ArrayList<>();
        for (int i = 0; i < responseBody.getData().getSearchResults().size(); i++) {
            SearchResult data = responseBody.getData().getSearchResults().get(i);
            VehicleInfo vehicleInfo = data.getVehicleInfo();
            RouteInfo routeInfo = data.getRouteInfo();
            result.add(CarRentalResponseDto.builder()
                    .model(vehicleInfo.getVName())
                    .pricePerDay(calcPricePerDay(data, daysDuration))
                    .pickUpAddress(routeInfo.getPickup().getAddress())
                    .pickUpPlaceName(routeInfo.getPickup().getName())
                    .dropOffAddress(routeInfo.getDropoff().getAddress())
                    .dropOffPlaceName(routeInfo.getDropoff().getName())
                    .image(vehicleInfo.getImageUrl())
                    .carLink(data.getForwardUrl())
                    .totalPrice(data.getPricingInfo().getBasePrice())
                    .rentalPeriod(daysDuration)
                    .rating(data.getRatingInfo().getAverage())
                    .ratingDescription(data.getRatingInfo().getAverageText())
                    .supplierName(data.getSupplierInfo().getName())
                    .supplierLogo(data.getSupplierInfo().getLogoUrl())
                    .seats(Integer.valueOf(vehicleInfo.getSeats()))
                    .carGroup(vehicleInfo.getGroup())
                    .transmission(vehicleInfo.getTransmission())
                    .build());
        }
        return result;
    }


    private Double calcPricePerDay(SearchResult data, Integer daysDuration) {
        return data.getPricingInfo().getBasePrice() / daysDuration;
    }

    private String getCarTypeAsString(List<CarCategory> carTypes) {
        return carTypes.stream()
                .map(CarCategory::getDisplayName)
                .collect(Collectors.joining(","));
    }

    private HttpHeaders createHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("X-RapidAPI-Key", apiKey);
        headers.set("X-RapidAPI-Host", apiUrl);

        return headers;
    }

}
