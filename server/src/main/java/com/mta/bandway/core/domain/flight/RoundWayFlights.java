package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class RoundWayFlights implements Serializable {

    @JsonProperty("status")
    private Boolean status;
    @JsonProperty("message")
    private Object message;
    @JsonProperty("data")
    private RoundWayDataResponse data;

}
