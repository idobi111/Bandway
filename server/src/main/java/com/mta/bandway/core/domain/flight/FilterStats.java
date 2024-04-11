
package com.mta.bandway.core.domain.flight;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = 8067031667744665833L;

    public FilterStats withDuration(Duration duration) {
        this.duration = duration;
        return this;
    }

    public FilterStats withAirports(List<Airport> airports) {
        this.airports = airports;
        return this;
    }

    public FilterStats withCarriers(List<Carrier> carriers) {
        this.carriers = carriers;
        return this;
    }

    public FilterStats withStopPrices(StopPrices stopPrices) {
        this.stopPrices = stopPrices;
        return this;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

    public FilterStats withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
