package com.mta.bandway.services;

import com.mta.bandway.api.domain.request.FlightRequestDto;
import com.mta.bandway.api.domain.response.AutoCompleteCityResponseDto;
import com.mta.bandway.api.domain.response.FlightResponseDto;
import com.mta.bandway.core.domain.flight.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class FlightService {
    private final String apiUrl;
    private final String flightAutoCompleteApi;
    private final String flightTwoWayApi;
    private final String flightOneWayApi;
    private final String apiKey;
    private final RestTemplate restTemplate;
//    private final FlightOrderRepository;

    @Autowired
    public FlightService(@Value("${flight.api.url}") String apiUrl, @Value("${flight.api.key}") String apiKey, RestTemplate restTemplate) {
        this.apiUrl = apiUrl;
        this.flightAutoCompleteApi = "https://" + apiUrl + "/flights/auto-complete";
        this.flightOneWayApi = "https://" + apiUrl + "/flights/search-one-way";
        this.flightTwoWayApi = "https://" + apiUrl + "/flights/search-roundtrip";
        this.apiKey = apiKey;
        this.restTemplate = restTemplate;
//        this.flightOrderRepository = flightOrderRepository;
    }

    public List<AutoCompleteCityResponseDto> getCities(String text) {
        HttpEntity<?> entity = new HttpEntity<>(createHeaders());
        String urlWithQuery = UriComponentsBuilder.fromHttpUrl(flightAutoCompleteApi).queryParam("query", text).toUriString();
        List<AutoCompleteCityResponseDto> result = new ArrayList<>();
        ResponseEntity<AutoCompleteCity> s = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, AutoCompleteCity.class);
        for (int i = 0; i < Objects.requireNonNull(s.getBody()).data.size(); i++) {
            Datum data = s.getBody().data.get(i);
            result.add(AutoCompleteCityResponseDto.builder().id(data.id).city(data.presentation.suggestionTitle).country(data.presentation.subtitle).build());
        }
        return result;
    }

    public List<FlightResponseDto> getFlight(FlightRequestDto flightRequestDto) {
        if (flightRequestDto.getIsRoundTrip()) {
            return getTwoWayFlight(flightRequestDto);
        } else {
            String s = String.valueOf(getOneWayFlight(flightRequestDto));
            return null;
        }
    }

    private List<FlightDetails> getOneWayFlight(FlightRequestDto flightRequestDto) {
        HttpEntity<?> entity = new HttpEntity<>(createHeaders());
        String urlWithQuery = UriComponentsBuilder.fromHttpUrl(flightAutoCompleteApi).queryParam("fromId", flightRequestDto.getSrcAirport()).queryParam("toId", flightRequestDto.getDestAirport()).queryParam("departDate", flightRequestDto.getDepartureDate().toString()).queryParam("adults", flightRequestDto.getAdults()).queryParam("children", flightRequestDto.getChildren()).queryParam("infants", flightRequestDto.getInfants()).queryParam("cabinClass", flightRequestDto.getCabinClass()).toUriString();
        ResponseEntity<OneWayFlight> oneWayFlightResponseEntity = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, OneWayFlight.class);
        List<FlightDetails> result = new ArrayList<>();
//        TODO: Implement the logic to get the flight details
        return null;
    }

    private String buildFlightNumber(Itinerary flightResponse) {
        return "";
    }

    private List<FlightResponseDto> getTwoWayFlight(FlightRequestDto flightRequestDto) {
        return null;
    }

    private HttpHeaders createHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", apiKey);
        headers.set("X-RapidAPI-Host", apiUrl);
        return headers;
    }

}
