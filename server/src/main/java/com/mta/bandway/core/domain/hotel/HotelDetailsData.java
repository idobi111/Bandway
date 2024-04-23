package com.mta.bandway.core.domain.hotel;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class HotelDetailsData {
    @JsonProperty("url")
    private String url;

}
