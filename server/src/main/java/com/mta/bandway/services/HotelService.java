package com.mta.bandway.services;

import com.mta.bandway.api.domain.request.HotelRequestDto;
import com.mta.bandway.api.domain.response.HotelResponseDto;
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
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class HotelService {
    private final String apiUrl;
    private final String apiKey;
    private final RestTemplate restTemplate;
    private final String bookingUrl;
    private final String bookingCityIdUrl;

    @Autowired
    public HotelService(
            @Value("${booking.api.url}") String apiUrl,
            @Value("${booking.api.key}") String apiKey,
            RestTemplate restTemplate) {
        this.apiUrl = apiUrl;
        this.bookingUrl = "https://" + apiUrl + "/hotels/searchHotels";
        this.bookingCityIdUrl = "https://" + apiUrl + "/hotels/searchDestination";
        this.apiKey = apiKey;
        this.restTemplate = restTemplate;
    }


    private static Datum getDatum(ResponseEntity<CityResponse> cityData) {
        return cityData.getBody().getData().stream()
                .filter(dat -> dat.getDestType().equalsIgnoreCase("landmark") ||
                        dat.getDestType().equalsIgnoreCase("city"))
                .findFirst()
                .orElse(null);
    }

    private static boolean isValidCityResponse(ResponseEntity<CityResponse> cityData) {
        return cityData.getBody() == null || cityData.getBody().getData() == null || cityData.getBody().getData().isEmpty();
    }

    private static String getDateTime(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(date);
    }

    private static List<HotelResponseDto> buildResponse(HotelRequestDto hotelDto, ResponseEntity<HotelResponse> hotels) {
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
                        .checkIn(getDateTime(hotelDto.getCheckIn()))
                        .checkOut(getDateTime(hotelDto.getCheckOut()))
                        .price(hotel.getProperty().getPriceBreakdown().getGrossPrice().getValue())
                        .children(hotelDto.getChildren())
                        .rating(hotelProperty.getReviewScore())
                        .rooms(hotelDto.getRooms())
                        .build());
            }
        }
        return responses;
    }

    private HttpHeaders createHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", apiKey);
        headers.set("X-RapidAPI-Host", apiUrl);
        headers.set(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE);
        return headers;
    }

    private URI buildSearchHotelUri(String destId, String arrivalDate, String departureDate, int adults, int roomQty, String destType, String languageCode, String currencyCode) {
        return UriComponentsBuilder.fromHttpUrl(bookingUrl)
                .queryParam("dest_id", destId)
                .queryParam("search_type", destType)
                .queryParam("arrival_date", arrivalDate)
                .queryParam("departure_date", departureDate)
                .queryParam("adults", String.valueOf(adults))
                .queryParam("room_qty", String.valueOf(roomQty))
                .queryParam("languagecode", languageCode)
                .queryParam("currency_code", currencyCode).build().toUri();
    }

    private ResponseEntity<CityResponse> getCityId(String city) {
        HttpEntity<?> entity = new HttpEntity<>(createHeaders());
        String urlWithQuery = UriComponentsBuilder.fromHttpUrl(bookingCityIdUrl)
                .queryParam("query", city.replace(" ", "_"))
                .toUriString();
        return restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, CityResponse.class);
    }

    public ResponseEntity<List<HotelResponseDto>> getHotels(HotelRequestDto hotelDto) {
        ResponseEntity<CityResponse> cityData = getCityId(hotelDto.getVenueName());
        if (isValidCityResponse(cityData)) return null; //TODO: handle error
        Datum datum = getDatum(cityData);
        if (datum == null) return null;//TODO: handle error
        URI uri = buildSearchHotelUri(datum.getDestId(), getDateTime(hotelDto.getCheckIn()), getDateTime(hotelDto.getCheckOut()), hotelDto.getAdults(), hotelDto.getRooms(), datum.getDestType(), "en-us", "US");
        HttpEntity<?> entity = new HttpEntity<>(createHeaders());
        ResponseEntity<HotelResponse> hotels = restTemplate.exchange(uri, HttpMethod.GET, entity, HotelResponse.class);
        List<HotelResponseDto> responses = buildResponse(hotelDto, hotels);
        return ResponseEntity.ok(responses);
    }

}
