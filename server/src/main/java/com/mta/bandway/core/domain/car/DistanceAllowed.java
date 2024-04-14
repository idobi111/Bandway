
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "is_unlimited",
    "value",
    "is_km",
    "per_duration"
})

public class DistanceAllowed implements Serializable
{

    @JsonProperty("is_unlimited")
    public Integer isUnlimited;
    @JsonProperty("value")
    public Object value;
    @JsonProperty("is_km")
    public Integer isKm;
    @JsonProperty("per_duration")
    public Object perDuration;
    private final static long serialVersionUID = 866111398792430192L;

}
