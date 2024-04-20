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

import java.net.URI;
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
    private final String multiCityWayApi;
    private final String flightOneWayApi;
    private final String apiKey;
    private final RestTemplate restTemplate;
//    private final FlightOrderRepository;

    @Autowired
    public FlightService(@Value("${flight.api.url}") String apiUrl, @Value("${flight.api.key}") String apiKey, RestTemplate restTemplate) {
        this.apiUrl = apiUrl;
        this.flightAutoCompleteApi = "https://" + apiUrl + "/api/v1/flights/auto-complete";
        this.flightOneWayApi = "https://" + apiUrl + "/api/v1/flights/search-one-way";
        this.flightTwoWayApi = "https://" + apiUrl + "/api/v1/flights/search-roundtrip";
        this.multiCityWayApi = "https://" + apiUrl + "/api/v1/flights/search-multi-city";
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
        ResponseEntity<AutoCompleteCity> response = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, AutoCompleteCity.class);
        for (int i = 0; i < Objects.requireNonNull(response.getBody()).getData().size(); i++) {
            Datum data = response.getBody().getData().get(i);
            result.add(AutoCompleteCityResponseDto.builder().id(data.getId()).city(data.getPresentation().getSuggestionTitle()).country(data.getPresentation().getSubtitle()).build());
        }
        return result;
    }

    public FlightResponseDto searchFlight(FlightRequestDto flightRequestDto) {
        if (flightRequestDto.getIsRoundTrip()) {
            return getRoundTrip(flightRequestDto);
        } else if (flightRequestDto.getIsMultiCityTrip()) {
            return getMultiCityFlight(flightRequestDto);
        } else {
            return handleOneWayFlight(flightRequestDto);
        }
    }

    private FlightResponseDto getRoundTrip(FlightRequestDto flightRequestDto) {
        HttpEntity<?> entity = new HttpEntity<>(createHeaders());
        String urlWithQuery = UriComponentsBuilder.fromHttpUrl(flightTwoWayApi)
                .queryParam("fromId", flightRequestDto.getSrc())
                .queryParam("toId", flightRequestDto.getDest())
                .queryParam("departDate", getDateTime(flightRequestDto.getDepartureDate()))
                .queryParam("returnDate", getDateTime(flightRequestDto.getReturnDate()))
                .queryParam("adults", flightRequestDto.getAdults())
                .queryParam("children", flightRequestDto.getChildren())
                .queryParam("infants", flightRequestDto.getInfants())
                .queryParam("cabinClass", flightRequestDto.getCabinClass()).toUriString();
        ResponseEntity<RoundWayFlights> oneWayFlightResponseEntity = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, RoundWayFlights.class);
//       //TODO: Create data member of it
        return null;
    }

    private FlightResponseDto handleOneWayFlight(FlightRequestDto flightRequestDto) {
        List<SessionFlightDetails> flightSession = getOneWayFlight(flightRequestDto);
        return FlightResponseDto.builder()
                .isSingleWay(true)
                .departFlightDetails(flightSession)
                .build();
    }

    private List<SessionFlightDetails> getOneWayFlight(FlightRequestDto flightRequestDto) {
        HttpEntity<?> entity = new HttpEntity<>(createHeaders());
        URI urlWithQuery = UriComponentsBuilder.fromHttpUrl(flightOneWayApi)
                .queryParam("fromId", flightRequestDto.getSrc())
                .queryParam("toId", flightRequestDto.getDest())
                .queryParam("departDate", getDateTime(flightRequestDto.getDepartureDate()))
                .queryParam("adults", flightRequestDto.getAdults())
                .queryParam("children", flightRequestDto.getChildren())
                .queryParam("infants", flightRequestDto.getInfants())
                .queryParam("cabinClass", flightRequestDto.getCabinClass()).build().toUri();
        ResponseEntity<OneWayFlight> oneWayFlightResponseEntity = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, OneWayFlight.class);
        List<SessionFlightDetails> result = new ArrayList<>();
        if (oneWayFlightResponseEntity.getBody() == null) {
            return result;
        }
        FlightOneWayData data = oneWayFlightResponseEntity.getBody().getData();
        for (Itinerary itinerary : oneWayFlightResponseEntity.getBody().getData().getItineraries()) {
            for (Leg leg : itinerary.getLegs()) {
                List<FlightDetails> flightDetailsList = new ArrayList<>();
                for (Segment segment : leg.getSegments()) {
                    flightDetailsList.add(buildFlightDetails(segment));
                }
                result.add(buildSessionFlightDetails(data, itinerary, leg, flightDetailsList));
            }
        }
        return result;
    }

    private SessionFlightDetails buildSessionFlightDetails(FlightOneWayData data, Itinerary itinerary, Leg leg, List<FlightDetails> flightDetailsList) {
        return SessionFlightDetails.builder()
                .flightDetails(flightDetailsList)
                .marketing(leg.getCarriers().getMarketing())
                .price(itinerary.getPrice().getRaw())
                .duration(getDurationTimeFormat(leg.getDurationInMinutes()))
                .token(data.getToken())
                .build();
    }

    private FlightDetails buildFlightDetails(Segment segment) {
        return FlightDetails.builder()
                .id(segment.getId())
                .flightNumber(buildFlightNumber(segment))
                .departureCityName(segment.getOrigin().getParent().getName())
                .departureTime(segment.getDeparture())
                .departureAirport(segment.getOrigin().getDisplayCode())
                .arrivalCityName(segment.getDestination().getParent().getName())
                .arrivalTime(segment.getArrival())
                .arrivalAirport(segment.getDestination().getDisplayCode())
                .airline(segment.getMarketingCarrier().getName())
                .duration(getDurationTimeFormat(segment.getDurationInMinutes()))
                .build();
    }

    private String getDurationTimeFormat(Integer durationInMinutes) {
        int hours = durationInMinutes / 60;
        int minutes = durationInMinutes % 60;
        return String.format("%02d:%02d", hours, minutes);
    }

    private String buildFlightNumber(Segment segment) {
        return segment.getMarketingCarrier().getAlternateId() + segment.getFlightNumber();
    }

    //    TODO: Create data member of it
    private FlightResponseDto getMultiCityFlight(FlightRequestDto flightRequestDto) {
        HttpEntity<MultiCityFlight> entity = createEntity(flightRequestDto);
        ResponseEntity<RoundWayFlights> roundWayFlightResponseEntity = restTemplate.exchange(multiCityWayApi, HttpMethod.POST, entity, RoundWayFlights.class);
        List<SessionFlightDetails> result = new ArrayList<>();
        if (roundWayFlightResponseEntity.getBody() == null) {
            return FlightResponseDto.builder()
                    .isSingleWay(false)
                    .departFlightDetails(result)
                    .arrivalFlightDetails(result)
                    .build();
        }
        return null;
    }

    private HttpHeaders createHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", apiKey);
        headers.set("X-RapidAPI-Host", apiUrl);
        return headers;
    }

    private HttpEntity<MultiCityFlight> createEntity(FlightRequestDto flightRequestDto) {
        HttpHeaders headers = createHeaders();
        MultiCityFlight requestBody = MultiCityFlight.builder()
                .adults(flightRequestDto.getAdults())
                .infants(flightRequestDto.getInfants())
                .children(flightRequestDto.getChildren())
                .cabinClass(flightRequestDto.getCabinClass())
                .currency("USD")
                .market("US")
                .locale("en-US")
                .flights(List.of(Flight.builder()
                                .fromId(flightRequestDto.getSrc())
                                .toId(flightRequestDto.getDest())
                                .departDate(getDateTime(flightRequestDto.getDepartureDate()))
                                .build(),
                        Flight.builder()
                                .fromId(flightRequestDto.getDest())
                                .toId(flightRequestDto.getSrc())
                                .departDate(getDateTime(flightRequestDto.getReturnDate()))
                                .build()))
                .build();
        return new HttpEntity<>(requestBody, headers);
    }

}
