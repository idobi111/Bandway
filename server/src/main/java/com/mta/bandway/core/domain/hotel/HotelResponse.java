package com.mta.bandway.core.domain.hotel;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class HotelResponse {
    private boolean status;
    private Object message;
    private long timestamp;
    @JsonProperty("data")
    private HotelData data;
}
