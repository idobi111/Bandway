
package com.mta.bandway.core.domain.flight;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "min",
    "max",
    "multiCityMin",
    "multiCityMax"
})

public class Duration implements Serializable
{

    @JsonProperty("min")
    public Integer min;
    @JsonProperty("max")
    public Integer max;
    @JsonProperty("multiCityMin")
    public Integer multiCityMin;
    @JsonProperty("multiCityMax")
    public Integer multiCityMax;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = 481643864292873885L;

    public Duration withMin(Integer min) {
        this.min = min;
        return this;
    }

    public Duration withMax(Integer max) {
        this.max = max;
        return this;
    }

    public Duration withMultiCityMin(Integer multiCityMin) {
        this.multiCityMin = multiCityMin;
        return this;
    }

    public Duration withMultiCityMax(Integer multiCityMax) {
        this.multiCityMax = multiCityMax;
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

    public Duration withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
