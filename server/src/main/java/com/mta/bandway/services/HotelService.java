package com.mta.bandway.services;

import com.mta.bandway.api.domain.HotelResponseDto;
import com.mta.bandway.api.domain.RequestHotelDto;
import com.mta.bandway.core.domain.city.CityResponse;
import com.mta.bandway.core.domain.city.Datum;
import com.mta.bandway.core.domain.hotel.Hotel;
import com.mta.bandway.core.domain.hotel.HotelResponse;
import com.mta.bandway.core.domain.hotel.Property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class HotelService {
    private final String apiUrl;
    private final RestTemplate restTemplate;
    private HttpHeaders headers;

    @Autowired
    public HotelService(@Value("${booking.api.url}") String apiUrl, RestTemplate restTemplate) {
        this.apiUrl = apiUrl;
        this.restTemplate = restTemplate;
        this.headers = createHeaders();
    }

    private static Datum getDatum(ResponseEntity<CityResponse> cityData) {
        return cityData.getBody().getData().stream()
                .filter(dat -> dat.getDestType().equalsIgnoreCase("city"))
                .findFirst()
                .orElse(null);
    }

    private static boolean isValidCityRespinse(ResponseEntity<CityResponse> cityData) {
        return cityData.getBody() == null || cityData.getBody().getData() == null || cityData.getBody().getData().isEmpty();
    }

    private static List<HotelResponseDto> buildResponse(RequestHotelDto hotelDto, ResponseEntity<HotelResponse> hotels) {
        List<HotelResponseDto> responses = new ArrayList<>();
        if (hotels.getStatusCode() == HttpStatusCode.valueOf(200)) {
            ArrayList<Hotel> hotelResponse = hotels.getBody().getData().getHotels();
            for (Hotel hotel : hotelResponse) {
                Property hotelProperty = hotel.getProperty();
                responses.add(HotelResponseDto.builder()
                        .hotelId(hotelProperty.getId())
                        .hotelName(hotelProperty.getName())
                        .photoUrl(hotelProperty.getPhotoUrls())
                        .adults(hotelDto.getAdults())
                        .checkIn(hotelDto.getCheckIn())
                        .checkOut(hotelDto.getCheckOut())
                        .price(hotel.getProperty().getPriceBreakdown().getGrossPrice().getValue())
                        .children(hotelDto.getChildren())
                        .rooms(hotelDto.getRooms())
                        .build());
            }
        }
        return responses;
    }

    private HttpHeaders createHeaders() {
        headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", "8f1afd2703mshbbaa90466010d43p1d399ajsn55b304bafe77");
        headers.set("X-RapidAPI-Host", "booking-com15.p.rapidapi.com");
        headers.set(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE);
        return headers;
    }

    private Map<String, String> createQueryParams(String destId, String arrivalDate, String departureDate, int adults, int roomQty, String languageCode, String currencyCode) {
        Map<String, String> queryParams = new HashMap<>();
        queryParams.put("dest_id", destId);
        queryParams.put("search_type", "CITY");
        queryParams.put("arrival_date", arrivalDate);
        queryParams.put("departure_date", departureDate);
        queryParams.put("adults", String.valueOf(adults));
        queryParams.put("room_qty", String.valueOf(roomQty));
        queryParams.put("languagecode", languageCode);
        queryParams.put("currency_code", currencyCode);
        return queryParams;
    }

    private ResponseEntity<CityResponse> getCityId(String city) {
        HttpEntity<?> entity = new HttpEntity<>(headers);
        String urlWithQuery = UriComponentsBuilder.fromHttpUrl(apiUrl + "/hotels/searchDestination")
                .queryParam("query", city)
                .toUriString();
        return restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, CityResponse.class);
    }

    public ResponseEntity<List<HotelResponseDto>> getHotels(RequestHotelDto hotelDto) {
        ResponseEntity<CityResponse> cityData = getCityId(hotelDto.getCity());
        if (isValidCityRespinse(cityData)) return null; //TODO: handle error
        Datum datum = getDatum(cityData);
        if (datum == null) return null;//TODO: handle error
        Map<String, String> queryParams = createQueryParams(datum.getDestId(), hotelDto.getCheckIn(), hotelDto.getCheckOut(), hotelDto.getAdults(), hotelDto.getRooms(), "en-us", "ILS");
        URI uri = buildSearchHotelUri(queryParams);
        HttpEntity<Void> entity = new HttpEntity<>(headers);
        ResponseEntity<HotelResponse> hotels = restTemplate.exchange(uri, HttpMethod.GET, entity, HotelResponse.class);
        List<HotelResponseDto> responses = buildResponse(hotelDto, hotels);
        return ResponseEntity.ok(responses);
    }

    private URI buildSearchHotelUri(Map<String, String> queryParams) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(apiUrl + "/hotels/searchHotels");
        for (Map.Entry<String, String> entry : queryParams.entrySet()) {
            builder.queryParam(entry.getKey(), entry.getValue());
        }
        return builder.build().toUri();
    }


}
