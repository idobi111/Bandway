package com.mta.bandway.services;

import com.mta.bandway.api.domain.request.FlightRequestDto;
import com.mta.bandway.api.domain.response.AutoCompleteCityResponseDto;
import com.mta.bandway.api.domain.response.FlightPriceResponseDto;
import com.mta.bandway.api.domain.response.OneWayFlightResponseDto;
import com.mta.bandway.api.domain.response.RoundWayFlightResponseDto;
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
    private final String flightOneWayApi;
    private final String flightPrice;
    private final String apiKey;
    private final RestTemplate restTemplate;
//    private final FlightOrderRepository;

    @Autowired
    public FlightService(@Value("${flight.api.url}") String apiUrl, @Value("${rapid.api.key}") String apiKey, RestTemplate restTemplate) {
        this.apiUrl = apiUrl;
        this.flightAutoCompleteApi = "https://" + apiUrl + "/api/v1/flights/auto-complete";
        this.flightOneWayApi = "https://" + apiUrl + "/api/v1/flights/search-one-way";
        this.flightTwoWayApi = "https://" + apiUrl + "/api/v1/flights/search-roundtrip";
        this.flightPrice = "https://" + apiUrl + "/api/v1/flights/detail";
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
        URI urlWithQuery = UriComponentsBuilder.fromHttpUrl(flightAutoCompleteApi).queryParam("query", text).build().toUri();
        List<AutoCompleteCityResponseDto> result = new ArrayList<>();
        ResponseEntity<AutoCompleteCity> response = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, AutoCompleteCity.class);
        for (int i = 0; i < Objects.requireNonNull(response.getBody()).getData().size(); i++) {
            Datum data = response.getBody().getData().get(i);
            result.add(AutoCompleteCityResponseDto.builder()
                    .id(data.getId())
                    .name(data.getPresentation().getSuggestionTitle())
                    .country(data.getPresentation().getSubtitle())
                    .entityType(data.getNavigation().getEntityType())
                    .build());
        }
        return result;
    }

    public OneWayFlightResponseDto searchOneWayFlight(FlightRequestDto flightRequestDto) {
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
        if (oneWayFlightResponseEntity.getBody() == null || oneWayFlightResponseEntity.getBody().getData() == null) {
            return OneWayFlightResponseDto.builder().build();
        }
        List<SessionFlightDetails> sessionFlightDetails = new ArrayList<>();
        FlightOneWayData data = oneWayFlightResponseEntity.getBody().getData();
        double minRaw = Double.MAX_VALUE;
        double maxRaw = Double.MIN_VALUE;
        List<OneWaySessionFlight> oneWaySessionFlights = new ArrayList<>();
        for (Itinerary itinerary : oneWayFlightResponseEntity.getBody().getData().getItineraries()) {
            Price price = itinerary.getPrice();
            if (price != null) {
                Double raw = price.getRaw();
                minRaw = Math.min(minRaw, raw);
                maxRaw = Math.max(maxRaw, raw);
            }
            for (Leg leg : itinerary.getLegs()) {
                List<FlightDetails> flightDetailsList = new ArrayList<>();
                for (Segment segment : leg.getSegments()) {
                    flightDetailsList.add(buildFlightDetails(segment, itinerary.getId()));
                }
                sessionFlightDetails.add(buildSessionFlightDetails(itinerary, leg, flightDetailsList));
            }
            oneWaySessionFlights.add(OneWaySessionFlight.builder()
                    .departFlightDetails(sessionFlightDetails)
                    .build());
        }
        return OneWayFlightResponseDto.builder()
                .departFlightDetails(oneWaySessionFlights)
                .token(data.getToken())
                .minPrice(minRaw)
                .maxPrice(maxRaw)
                .build();
    }

    public RoundWayFlightResponseDto searchRoundWayFlight(FlightRequestDto flightRequestDto) {
        HttpEntity<?> entity = new HttpEntity<>(createHeaders());
        URI urlWithQuery = UriComponentsBuilder.fromHttpUrl(flightTwoWayApi)
                .queryParam("fromId", flightRequestDto.getSrc())
                .queryParam("toId", flightRequestDto.getDest())
                .queryParam("departDate", getDateTime(flightRequestDto.getDepartureDate()))
                .queryParam("returnDate", getDateTime(flightRequestDto.getReturnDate()))
                .queryParam("adults", flightRequestDto.getAdults())
                .queryParam("children", flightRequestDto.getChildren())
                .queryParam("infants", flightRequestDto.getInfants())
                .queryParam("cabinClass", flightRequestDto.getCabinClass())
                .queryParam("currency", "USD").build().toUri();
        ResponseEntity<RoundWayFlights> roundWayFlightsResponseEntity = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, RoundWayFlights.class);
        if (roundWayFlightsResponseEntity.getBody() == null || roundWayFlightsResponseEntity.getBody().getData() == null) {
            RoundWayFlightResponseDto.builder().build();
        }

        RoundWayDataResponse data = roundWayFlightsResponseEntity.getBody().getData();
        double minRaw = Double.MAX_VALUE;
        double maxRaw = Double.MIN_VALUE;
        List<RoundWaySessionFlight> roundWaySessionFlights = new ArrayList<>();
        for (Itinerary itinerary : roundWayFlightsResponseEntity.getBody().getData().getItineraries()) {
            List<SessionFlightDetails> departFlights = new ArrayList<>();
            List<SessionFlightDetails> returnFlights = new ArrayList<>();
            Price price = itinerary.getPrice();
            if (price != null) {
                Double raw = price.getRaw();
                minRaw = Math.min(minRaw, raw);
                maxRaw = Math.max(maxRaw, raw);
            }
            for (int i = 0; i < itinerary.getLegs().size(); i++) {
                List<FlightDetails> flightDetailsList = new ArrayList<>();
                Leg leg = itinerary.getLegs().get(i);
                for (Segment segment : leg.getSegments()) {
                    flightDetailsList.add(buildFlightDetails(segment, itinerary.getId()));
                }
                if (i == 0) {
                    departFlights.add(buildSessionFlightDetails(itinerary, leg, flightDetailsList));
                } else {
                    returnFlights.add(buildSessionFlightDetails(itinerary, leg, flightDetailsList));
                }
            }
            roundWaySessionFlights.add(RoundWaySessionFlight.builder()
                    .departFlightDetails(departFlights)
                    .arriveFlightDetails(returnFlights)
                    .build());
        }
        return RoundWayFlightResponseDto.builder()
                .roundWayFlightDetails(roundWaySessionFlights)
                .token(data.getToken())
                .minPrice(minRaw)
                .maxPrice(maxRaw)
                .build();
    }

    private SessionFlightDetails buildSessionFlightDetails(Itinerary itinerary, Leg leg, List<FlightDetails> flightDetailsList) {
        return SessionFlightDetails.builder()
                .flightDetails(flightDetailsList)
                .sourceCity(leg.getOriginOrder().getCity())
                .sourceCountry(leg.getOriginOrder().getCountry())
                .destCity(leg.getSegments().get(leg.getSegments().size() - 1).getDestination().getParent().getName())
                .destCountry(leg.getSegments().get(leg.getSegments().size() - 1).getDestination().getCountry())
                .marketing(leg.getCarriers().getMarketing())
                .price(itinerary.getPrice().getRaw())
                .duration(getDurationTimeFormat(leg.getDurationInMinutes()))
                .stopCount(leg.getStopCount())
                .build();
    }

    private FlightDetails buildFlightDetails(Segment segment, String id) {
        return FlightDetails.builder()
                .id(id)
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

    private HttpHeaders createHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", apiKey);
        headers.set("X-RapidAPI-Host", apiUrl);
        return headers;
    }

    public List<FlightPriceResponseDto> getFlightPricing(String token, String itineraryId) {
        HttpEntity<?> entity = new HttpEntity<>(createHeaders());
        URI urlWithQuery = UriComponentsBuilder.fromHttpUrl(flightPrice)
                .queryParam("itineraryId", itineraryId)
                .queryParam("token", token).build().toUri();
        ResponseEntity<FlightPrice> flightPriceResponseEntity = restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, FlightPrice.class);
        FlightPrice data = flightPriceResponseEntity.getBody();
        if (data == null || data.getData() == null || data.getData().getItinerary() == null) {
            return List.of(FlightPriceResponseDto.builder().build());
        }
        List<FlightPriceResponseDto> flightPriceResponseDtos = new ArrayList<>();

        for (PricingOption price : data.getData().getItinerary().getPricingOptions()) {
            flightPriceResponseDtos.add(FlightPriceResponseDto.builder()
                    .agencyName(price.getAgents().get(0).getName())
                    .url(price.getAgents().get(0).getUrl())
                    .price(price.getAgents().get(0).getPrice())
                    .build());
        }
        return flightPriceResponseDtos;
    }
}
