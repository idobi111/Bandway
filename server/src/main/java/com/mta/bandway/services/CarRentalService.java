package com.mta.bandway.services;

import com.mta.bandway.api.domain.request.CarRentalRequestDto;
import com.mta.bandway.api.domain.response.AutoCompleteCityResponseDto;
import com.mta.bandway.api.domain.response.CarRentalResponseDto;
import com.mta.bandway.core.domain.car.auto.correct.AutoCompleteCarCity;
import com.mta.bandway.core.domain.car.auto.correct.CarCategory;
import com.mta.bandway.core.domain.car.auto.correct.CarDatum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.text.SimpleDateFormat;
import java.util.*;
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
    public CarRentalService(@Value("${carrental.api.url}") String apiUrl, @Value("${carrental.api.key}") String apiKey, RestTemplate restTemplate) {
        this.apiUrl = apiUrl;
        this.carRentalApi = "https://" + apiUrl + "/car/search";
        this.carAutoComplete = "https://" + apiUrl + "/car/auto-complete";
        this.apiKey = apiKey;
        this.restTemplate = restTemplate;
//        this.carRentalOrderRepository = carRentalOrderRepository;
    }

    private static String getDateTime(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(date);
    }

    public List<AutoCompleteCityResponseDto> getCityAutoComplete(String text) {
        HttpEntity<String> entity = new HttpEntity<>( createHeaders());
        String urlWithQuery = UriComponentsBuilder.fromHttpUrl(carAutoComplete).queryParam("query", text).toUriString();
        List<AutoCompleteCityResponseDto> result = new ArrayList<>();
        ResponseEntity<AutoCompleteCarCity> s = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, AutoCompleteCarCity.class);
        for (int i = 0; i < Objects.requireNonNull(s.getBody()).getData().size(); i++) {
            CarDatum data = s.getBody().getData().get(i);
            result.add(AutoCompleteCityResponseDto.builder().id(data.getId()).city(data.getCity()).country(data.getCountry()).build());
        }
        return result;
    }
//TODO: WTF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    public List<CarRentalResponseDto> searchCarRental(CarRentalRequestDto requestCarRentalDto) {
        HttpEntity<String> entity = new HttpEntity<>(createHeaders());
        String urlWithQuery = UriComponentsBuilder.fromHttpUrl(carRentalApi)
                .queryParam("pickUpId", requestCarRentalDto.getPickupCity())
                .queryParam("dropOffId", requestCarRentalDto.getDropoffCity())
                .queryParam("pickUpDate", getDateTime(requestCarRentalDto.getPickupStartDate()))
                .queryParam("pickUpTime", requestCarRentalDto.getPickupTime())
                .queryParam("dropOffDate", getDateTime(requestCarRentalDto.getDropoffEndDate()))
                .queryParam("dropOffTime", requestCarRentalDto.getDropoffTime())
                .queryParam("driverAge", requestCarRentalDto.getDriverAge())
                .queryParam("carType", getCarTypeAsString(requestCarRentalDto.getCarType()))
                .queryParam("hasAirConditioning", requestCarRentalDto.getHasHairConditioner())
                .toUriString();
        ResponseEntity<String> response = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, String.class);
        return null;
    }

    private String getCarTypeAsString(List<CarCategory> carTypes) {
        return carTypes.stream()
                .map(CarCategory::getDisplayName)
                .collect(Collectors.joining(","));
    }

    private HttpHeaders createHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));
        headers.set("X-RapidAPI-Key", apiKey);
        headers.set("X-RapidAPI-Host", apiUrl);

        return headers;
    }

}
