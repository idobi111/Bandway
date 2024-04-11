
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
    "raw",
    "formatted",
    "pricingOptionId"
})

public class Price implements Serializable
{

    @JsonProperty("raw")
    public Double raw;
    @JsonProperty("formatted")
    public String formatted;
    @JsonProperty("pricingOptionId")
    public String pricingOptionId;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = -4583046236618419021L;

    public Price withRaw(Double raw) {
        this.raw = raw;
        return this;
    }

    public Price withFormatted(String formatted) {
        this.formatted = formatted;
        return this;
    }

    public Price withPricingOptionId(String pricingOptionId) {
        this.pricingOptionId = pricingOptionId;
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

    public Price withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
