package com.mta.bandway.services;

import com.mta.bandway.api.domain.HotelDto;
import com.mta.bandway.core.domain.city.CityResponse;
import com.mta.bandway.core.domain.city.Datum;
import com.mta.bandway.core.domain.hotel.HotelResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Collections;
import java.util.Map;

@Service
public class HotelService {
    private final String apiUrl;
    private final RestTemplate restTemplate;    private static HttpHeaders headers = createHeaders();
    @Autowired
    public HotelService(@Value("${booking.api.url}") String apiUrl, RestTemplate restTemplate) {
        this.apiUrl = apiUrl;
        this.restTemplate = restTemplate;
    }

    private static HttpHeaders createHeaders() {
        headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", "8f1afd2703mshbbaa90466010d43p1d399ajsn55b304bafe77");
        headers.set("X-RapidAPI-Host", "booking-com15.p.rapidapi.com");
        headers.set(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE);
        return headers;
    }

    private static MultiValueMap<String, String> createQueryParams(String destId, String arrivalDate, String departureDate, int adults, int childrenAge, int roomQty, int pageNumber, String languageCode, String currencyCode) {
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.put("dest_id", Collections.singletonList(destId));
        queryParams.put("search_type", Collections.singletonList("CITY"));
        queryParams.put("arrival_date", Collections.singletonList(arrivalDate));
        queryParams.put("departure_date", Collections.singletonList(departureDate));
        queryParams.put("adults", Collections.singletonList(String.valueOf(adults)));
        queryParams.put("room_qty", Collections.singletonList(String.valueOf(roomQty)));
        queryParams.put("page_number", Collections.singletonList("1"));
        queryParams.put("languagecode", Collections.singletonList("en-us"));
        queryParams.put("currency_code", Collections.singletonList("ILS"));
        return queryParams;
    }

    private ResponseEntity<CityResponse> getCityId(String city) {
        HttpEntity<?> entity = new HttpEntity<>(headers);
        String urlWithQuery = UriComponentsBuilder.fromHttpUrl(apiUrl + "/hotels/searchDestination")
                .queryParam("query", city)
                .toUriString();
        return restTemplate.exchange(urlWithQuery, HttpMethod.GET, entity, CityResponse.class);
    }

    public ResponseEntity<HotelResponse> getHotels(HotelDto hotelDto) {
        ResponseEntity<CityResponse> cityData = getCityId(hotelDto.getCity());
        if (cityData.getBody() == null || cityData.getBody().getData() == null || cityData.getBody().getData().isEmpty()) {
            return null; //TODO: handle error
        }
        Datum datum = cityData.getBody().getData().stream()
                .filter(dat -> dat.getDestType().equalsIgnoreCase("city"))
                .findFirst()
                .orElse(null);
        if (datum == null) {
            return null;//TODO: handle error
        }
        MultiValueMap<String, String> queryParams = createQueryParams(datum.getDestId(), hotelDto.getCheckIn(), hotelDto.getCheckOut(), hotelDto.getAdults(), hotelDto.getChildren(), hotelDto.getRooms(), 4, "en-us", "ILS");
        URI uri = buildSearchHotelUri(queryParams);
        HttpEntity<Void> entity = new HttpEntity<>(headers);
        return restTemplate.exchange(uri, HttpMethod.GET, entity, HotelResponse.class);

    }

    private URI buildSearchHotelUri(MultiValueMap<String, String> queryParams) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(apiUrl + "/hotels/searchDestination");
        for (Map.Entry<String, String> entry : queryParams.toSingleValueMap().entrySet()) {
            builder.queryParam(entry.getKey(), entry.getValue());
        }
        URI uri = builder.build().toUri();
        return uri;
    }




}
