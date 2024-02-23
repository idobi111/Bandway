package com.mta.bandway.api.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data

public class HotelRequestDto {
    @JsonProperty("city")
    private String city;
    @JsonProperty("checkIn")
    private String checkIn;
    @JsonProperty("checkOut")
    private String checkOut;
    @JsonProperty("rooms")
    private int rooms;
    @JsonProperty("adults")
    private int adults;
    @JsonProperty("children")
    private int children;
    @JsonProperty("maxPrice")
    private int maxPrice;
    @JsonProperty("minPrice")
    private int minPrice;
}
