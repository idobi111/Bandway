package com.mta.bandway.services;

import com.mta.bandway.api.domain.response.ConcertResponseDto;
import com.mta.bandway.core.domain.concert.Embedded;
import com.mta.bandway.core.domain.concert.Event;
import com.mta.bandway.core.domain.concert.Image;
import com.mta.bandway.repositories.ConcertOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class ConcertService {
    @Value("${ticketmaster.api.url}")
    private String apiUrl;
    @Value("${ticketmaster.api.key}")
    private String apiKey;
    @Autowired
    private RestTemplate restTemplate;
    private ConcertOrderRepository concertOrderRepository;

    public List<ConcertResponseDto> getConcertsByPerformer(String performer) {
        HttpEntity<?> entity = new HttpEntity<>(createHeaders());
        String urlWithQuery = UriComponentsBuilder.fromHttpUrl(apiUrl)
                .queryParam("apikey", apiKey)
                .queryParam("classificationName", "music")
                .queryParam("keyword", performer)
                .toUriString();
        ResponseEntity<Event> s =restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, Event.class);
        Embedded concerts = Objects.requireNonNull(s.getBody()).get_embedded();
        if(concerts == null) {
            return new ArrayList<>();
        }
        return createConcertDtoResponse(concerts);

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
        headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);
        return headers;
    }

}
