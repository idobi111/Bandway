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

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
        this.flightOneWayApi = "https://" + apiUrl + "/api/v1/flights/search-one-way";
        this.flightTwoWayApi = "https://" + apiUrl + "/api/v1/flights/search-roundtrip";
        this.apiKey = apiKey;
        this.restTemplate = restTemplate;
//        this.flightOrderRepository = flightOrderRepository;
    }

    private static String getDateTime(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(date);
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

    public List<FlightResponseDto> searchFlight(FlightRequestDto flightRequestDto) {
        if (flightRequestDto.getIsRoundTrip()) {
            return getTwoWayFlight(flightRequestDto);
        } else {
            String s = String.valueOf(getOneWayFlight(flightRequestDto));
            return null;
        }
    }

    private List<FlightDetails> getOneWayFlight(FlightRequestDto flightRequestDto) {
        HttpEntity<?> entity = new HttpEntity<>(createHeaders());
        String urlWithQuery = UriComponentsBuilder.fromHttpUrl(flightOneWayApi)
                .queryParam("fromId", flightRequestDto.getSrc())
                .queryParam("toId", flightRequestDto.getDest())
                .queryParam("departDate", getDateTime(flightRequestDto.getDepartureDate()))
                .queryParam("adults", flightRequestDto.getAdults())
                .queryParam("children", flightRequestDto.getChildren())
                .queryParam("infants", flightRequestDto.getInfants())
                .queryParam("cabinClass", flightRequestDto.getCabinClass()).toUriString();
        ResponseEntity<OneWayFlight> oneWayFlightResponseEntity = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, OneWayFlight.class);
        List<FlightDetails> result = new ArrayList<>();
        if (oneWayFlightResponseEntity.getBody() == null) {
            return result;
        }
        for (int i = 0; i < Objects.requireNonNull(oneWayFlightResponseEntity.getBody()).getData().getItineraries().size(); i++) {
            Itinerary itinerary = oneWayFlightResponseEntity.getBody().getData().getItineraries().get(i);
            for (int j = 0; j < itinerary.getLegs().size(); j++) {
                Leg leg = itinerary.getLegs().get(j);
                List<String> flightLogo = new ArrayList<>();
                for (int t = 0; t < leg.getCarriers().getMarketing().size(); t++) {

                    flightLogo.add(leg.getCarriers().getMarketing().get(t).logoUrl);
                }
                for (int k = 0; k < leg.getSegments().size(); k++) {
                    Segment segment = itinerary.getLegs().get(j).getSegments().get(k);
                    FlightDetails flightDetails = FlightDetails.builder()
                            .flightNumber(buildFlightNumber(segment))
                            .arrivalAirport(segment.getArrival())
                            .arrivalCityName(segment.getOrigin().getName())
                            .departureAirport(segment.getOrigin().getDisplayCode())
                            .departureCityName(segment.getOrigin().getName())
                            .airline(segment.getMarketingCarrier().getName())
                            .price(itinerary.getPrice().getRaw())
                            .departureTime(segment.getDeparture())
                            .arrivalTime(segment.getArrival())
                            .duration(getDurationTimeFormat(segment.getDurationInMinutes()))
                            .build();
                    result.add(flightDetails);
                }
            }
        }

        return result;
    }

    private String getDurationTimeFormat(Integer durationInMinutes) {
        int hours = durationInMinutes / 60;
        int minutes = durationInMinutes % 60;
        return String.format("%02d:%02d", hours, minutes);
    }

    private String buildFlightNumber(Segment segment) {
        return segment.getMarketingCarrier().getDisplayCode() + segment.getFlightNumber();
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
