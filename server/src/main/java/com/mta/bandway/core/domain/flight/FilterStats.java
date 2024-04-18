
package com.mta.bandway.core.domain.flight;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "duration",
    "airports",
    "carriers",
    "stopPrices"
})
public class FilterStats implements Serializable
{

    @JsonProperty("duration")
    public Duration duration;
    @JsonProperty("airports")
    public List<Airport> airports;
    @JsonProperty("carriers")
    public List<Carrier> carriers;
    @JsonProperty("stopPrices")
    public StopPrices stopPrices;
    private final static long serialVersionUID = -8317642280847984634L;

}
