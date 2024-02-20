package com.mta.bandway.api.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class SearchHotelDto {
    @JsonProperty("dest_id")
    private String destId;

    @JsonProperty(value = "search_type", defaultValue = "CITY")
    private String searchType;

    @JsonProperty("arrival_date")
    private String arrivalDate;

    @JsonProperty("departure_date")
    private String departureDate;

    @JsonProperty("adults")
    private int adults;

    @JsonProperty("room_qty")
    private int roomQty;

    @JsonProperty("page_number")
    private String pageNumber;

    @JsonProperty(value = "languagecode", defaultValue = "en-us")
    private String languageCode;

    @JsonProperty(value = "currency_code", defaultValue = "ILS")
    private String currencyCode;
}
