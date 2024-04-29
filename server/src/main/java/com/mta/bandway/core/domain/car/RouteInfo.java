package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class RouteInfo implements Serializable {

    @JsonProperty("pickup")
    private CarLocationData pickup;
    @JsonProperty("dropoff")
    private CarLocationData dropoff;

}
