package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class OneWayFlight {

    private boolean status;
    private String message;
    @JsonProperty("data")
    private FlightData data;

}
