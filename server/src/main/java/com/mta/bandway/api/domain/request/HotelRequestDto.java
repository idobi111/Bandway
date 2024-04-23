package com.mta.bandway.api.domain.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.Date;

@Data

public class HotelRequestDto {
    @JsonProperty("venueName")
    private String venueName;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date checkIn;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date checkOut;
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
