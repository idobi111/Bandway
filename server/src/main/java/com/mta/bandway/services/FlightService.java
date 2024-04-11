package com.mta.bandway.services;

import com.mta.bandway.api.domain.response.AutoCompleteCityResponseDto;
import com.mta.bandway.api.domain.response.ConcertResponseDto;
import com.mta.bandway.core.domain.concert.Embedded;
import com.mta.bandway.core.domain.concert.Image;
import com.mta.bandway.core.domain.flight.AutoCompleteCity;
import com.mta.bandway.core.domain.flight.Datum;
import com.mta.bandway.repositories.FlightOrderRepository;
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
    private final String flightUrlApi;
    private final String apiKey;
    private final RestTemplate restTemplate;
//    private final FlightOrderRepository flightOrderRepository;

    @Autowired
    public FlightService(@Value("${flight.api.url}") String apiUrl,
                         @Value("${flight.api.key}") String apiKey,
                         RestTemplate restTemplate
                         ) {
        this.apiUrl = apiUrl;
        this.flightUrlApi = "https://" + apiUrl + "/flights/auto-complete";
        this.apiKey = apiKey;
        this.restTemplate = restTemplate;
//        this.flightOrderRepository = flightOrderRepository;
    }

    public List<AutoCompleteCityResponseDto> getCities(String text) {
        HttpEntity<?> entity = new HttpEntity<>(createHeaders());
        String urlWithQuery = UriComponentsBuilder.fromHttpUrl(flightUrlApi)
                .queryParam("query", text)
                .toUriString();
        List<AutoCompleteCityResponseDto> result = new ArrayList<>();
        ResponseEntity<AutoCompleteCity> s = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, AutoCompleteCity.class);
        for (int i = 0; i < Objects.requireNonNull(s.getBody()).data.size(); i++) {
            Datum data = s.getBody().data.get(i);
            result.add(AutoCompleteCityResponseDto.builder().id(data.id).city(data.presentation.suggestionTitle).country(data.presentation.subtitle).build());
        }
        return result;
    }

    private List<ConcertResponseDto> createConcertDtoResponse(Embedded concert) {
        List<ConcertResponseDto> result = new ArrayList<>();
        for (int i = 0; i < concert.getEvents().size(); i++) {
            result.add(ConcertResponseDto.builder()
                    .performer(concert.getEvents().get(i).getName())
                    .date(concert.getEvents().get(i).getDates().getStart().getLocalDate())
                    .venue(concert.getEvents().get(i).get_embedded().getVenues().get(0).getName())
                    .city(concert.getEvents().get(i).get_embedded().getVenues().get(0).getCity().getName())
                    .country(concert.getEvents().get(i).get_embedded().getVenues().get(0).getCountry().getCountryCode())
                    .ticketUrl(concert.getEvents().get(i).getUrl())
                    .images(getImagesFromConcert(concert.getEvents().get(i).getImages()))
                    .build());
        }
        return result;
    }

    private List<String> getImagesFromConcert(List<Image> images) {
        List<String> result = new ArrayList<>();
        for (Image image : images) {
            result.add(image.getUrl());
        }
        return result;
    }

    private HttpHeaders createHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", apiKey);
        headers.set("X-RapidAPI-Host", apiUrl);
        return headers;
    }

}
