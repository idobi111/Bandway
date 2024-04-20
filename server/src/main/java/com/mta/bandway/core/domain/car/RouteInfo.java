
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "pickup",
    "dropoff"
})

public class RouteInfo implements Serializable
{

    @JsonProperty("pickup")
    public Pickup pickup;
    @JsonProperty("dropoff")
    public Dropoff dropoff;
    private final static long serialVersionUID = 8564505804847800685L;

}
