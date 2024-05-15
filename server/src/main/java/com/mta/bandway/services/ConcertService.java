package com.mta.bandway.services;

import com.mta.bandway.api.domain.response.ArtistAutoCompleteResponseDto;
import com.mta.bandway.api.domain.response.ConcertResponseDto;
import com.mta.bandway.api.domain.response.SpotifyLinkResponseDto;
import com.mta.bandway.core.domain.concert.*;
import com.mta.bandway.core.domain.concert.artist.AutoCompleteArtistResponse;
import com.mta.bandway.core.domain.concert.artist.Item;
import com.mta.bandway.core.domain.concert.artist.SpotifyToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.lang.Nullable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class ConcertService {
    private final String ticketmasterApiUrl;
    private final String ticketmasterApiKey;
    private final String spotifyClientId;
    private final String spotifyClientSecret;
    private final String spotifyTokenUrl;
    private final String spotifyArtistData;
    private final String spotifyAutoCompleteArtist;
    private final RestTemplate restTemplate;
    private String spotifyToken;

    @Autowired
    public ConcertService(@Value("${ticketmaster.api.url}") String ticketmasterApiUrl,
                          @Value("${ticketmaster.api.key}") String ticketmasterApiKey,
                          @Value("${spotify.api.url}") String spotifyApiUrl,
                          @Value("${spotify.api.token.url}") String spotifyTokenUrl,
                          @Value("${spotify.client.id}") String spotifyClientId,
                          @Value("${spotify.client.secret}") String spotifyClientSecret,
                          RestTemplate restTemplate) {
        this.ticketmasterApiUrl = ticketmasterApiUrl;
        this.ticketmasterApiKey = ticketmasterApiKey;
        this.spotifyAutoCompleteArtist = spotifyApiUrl + "/search";
        this.spotifyArtistData = spotifyApiUrl + "/artists";
        this.spotifyClientId = spotifyClientId;
        this.spotifyClientSecret = spotifyClientSecret;
        this.restTemplate = restTemplate;
        this.spotifyTokenUrl = spotifyTokenUrl;

    }

    public List<ConcertResponseDto> getConcertsByPerformer(String performer, List<String> cities) {
        performer = performer.replace(" ", "_");
        URI urlWithQuery;
        if (cities == null) {
            urlWithQuery = UriComponentsBuilder.fromHttpUrl(ticketmasterApiUrl)
                    .queryParam("apikey", ticketmasterApiKey)
                    .queryParam("classificationName", "music")
                    .queryParam("keyword", performer)
                    .build().toUri();
        } else {
            urlWithQuery = UriComponentsBuilder.fromHttpUrl(ticketmasterApiUrl)
                    .queryParam("apikey", ticketmasterApiKey)
                    .queryParam("classificationName", "music")
                    .queryParam("keyword", performer)
                    .queryParam("city", String.join(",", cities))
                    .build().toUri();
        }
        HttpEntity<?> entity = new HttpEntity<>(createHeaders());
        ResponseEntity<Event> eventResponseEntity = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, Event.class);
        Embedded concerts = Objects.requireNonNull(eventResponseEntity.getBody()).getEmbedded();
        if (concerts == null) {
            return new ArrayList<>();
        }
        return createConcertDtoResponse(concerts);

    }

    private List<ConcertResponseDto> createConcertDtoResponse(Embedded concert) {
        List<ConcertResponseDto> result = new ArrayList<>();
        for (int i = 0; i < concert.getEvents().size(); i++) {
            String concertId = concert.getEvents().get(i).getId();
            EventDetails data = getEventDetails(concertId);
            if (data == null || data.getEmbedded() == null) {
                return result;
            }
            List<PriceRange> prices = data.getEmbedded().getEvents().get(0).getPriceRanges();
            Double minPrice = prices.stream().mapToDouble(PriceRange::getMin).min().orElse(0);
            Double maxPrice = prices.stream().mapToDouble(PriceRange::getMax).max().orElse(10000);
            ExternalLinks externalLinks = data.getEmbedded().getEvents().get(0).getEmbedded().getAttractions().get(0).getExternalLinks();
            result.add(ConcertResponseDto.builder()
                    .id(concertId)
                    .performer(concert.getEvents().get(i).getName())
                    .date(concert.getEvents().get(i).getDates().getStart().getLocalDate())
                    .venue(concert.getEvents().get(i).getEmbedded().getVenues().get(0).getName())
                    .city(concert.getEvents().get(i).getEmbedded().getVenues().get(0).getCity().getName())
                    .country(concert.getEvents().get(i).getEmbedded().getVenues().get(0).getCountry().getCountryCode())
                    .ticketUrl(concert.getEvents().get(i).getUrl())
                    .images(getImagesFromConcert(concert.getEvents().get(i).getImages()))
                    .externalLinks(externalLinks)
                    .minPrice(minPrice)
                    .maxPrice(maxPrice)
                    .build());
        }
        return result;
    }

    @Nullable
    private EventDetails getEventDetails(String concertId) {
        URI urlWithQuery = UriComponentsBuilder.fromHttpUrl(ticketmasterApiUrl)
                .queryParam("apikey", ticketmasterApiKey)
                .queryParam("id", concertId)
                .build().toUri();
        HttpEntity<?> entity = new HttpEntity<>(createHeaders());
        ResponseEntity<EventDetails> eventDetailsResponseEntity = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, EventDetails.class);
        return eventDetailsResponseEntity.getBody();
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

    public SpotifyLinkResponseDto getArtistUrl(String artistId) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(spotifyToken);
        HttpEntity<?> entity = new HttpEntity<>(headers);
        URI uri = UriComponentsBuilder.fromHttpUrl(spotifyArtistData)
                .path("/" + artistId).build().toUri();
        ResponseEntity<Item> responseEntity = restTemplate.exchange(uri, HttpMethod.GET, entity, Item.class);
        Item item = Objects.requireNonNull(responseEntity.getBody());
        return SpotifyLinkResponseDto.builder()
                .spotifyLink(item.getExternalUrls().getSpotify())
                .artistName(item.getName())
                .imageList(item.getImages())
                .build();
    }

    public List<ArtistAutoCompleteResponseDto> getArtistAutoComplete(String artistName) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(spotifyToken);
        HttpEntity<?> entity = new HttpEntity<>(headers);

        URI uri = UriComponentsBuilder.fromHttpUrl(spotifyAutoCompleteArtist)
                .queryParam("q", artistName)
                .queryParam("type", "artist")
                .queryParam("limit", "10").build().toUri();
        ResponseEntity<AutoCompleteArtistResponse> responseEntity = restTemplate.exchange(uri, HttpMethod.GET, entity, AutoCompleteArtistResponse.class);
        List<ArtistAutoCompleteResponseDto> result = new ArrayList<>();
        if (responseEntity.getBody() != null) {
            for (Item artist : responseEntity.getBody().getArtists().getItems()) {
                {
                    result.add(ArtistAutoCompleteResponseDto.builder()
                            .artistName(artist.getName())
                            .artistId(artist.getId())
                            .spotifyLink(artist.getExternalUrls().getSpotify())
                            .genres(artist.getGenres())
                            .images(artist.getImages())
                            .popularity(artist.getPopularity())
                            .build());
                }
            }
        }
        return result;
    }

    @Scheduled(fixedDelay = 3600000) // each 1 hour
    public void getSpotifyToken() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> requestBody = new LinkedMultiValueMap<>();
        requestBody.add("grant_type", "client_credentials");
        requestBody.add("client_id", spotifyClientId);
        requestBody.add("client_secret", spotifyClientSecret);

        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(requestBody, headers);

        ResponseEntity<SpotifyToken> responseEntity = restTemplate.exchange(spotifyTokenUrl, HttpMethod.POST, requestEntity, SpotifyToken.class);
        if (responseEntity.getStatusCode() == HttpStatus.OK && responseEntity.getBody() != null) {
            spotifyToken = responseEntity.getBody().getAccessToken();
        }
    }

    public List<ConcertResponseDto> getUpcomingConcert() {
        HttpEntity<?> entity = new HttpEntity<>(createHeaders());
        String urlWithQuery = UriComponentsBuilder.fromHttpUrl(ticketmasterApiUrl)
                .queryParam("apikey", ticketmasterApiKey)
                .queryParam("classificationName", "music")
                .queryParam("marketId", "3")
                .toUriString();
        ResponseEntity<Event> eventResponseEntity = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, Event.class);
        Embedded concerts = Objects.requireNonNull(eventResponseEntity.getBody()).getEmbedded();
        if (concerts == null) {
            return new ArrayList<>();
        }
        return createConcertDtoResponse(concerts);
    }
}
