
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
    "isChangeAllowed",
    "isPartiallyChangeable",
    "isCancellationAllowed",
    "isPartiallyRefundable"
})

public class FarePolicy implements Serializable
{

    @JsonProperty("isChangeAllowed")
    public Boolean isChangeAllowed;
    @JsonProperty("isPartiallyChangeable")
    public Boolean isPartiallyChangeable;
    @JsonProperty("isCancellationAllowed")
    public Boolean isCancellationAllowed;
    @JsonProperty("isPartiallyRefundable")
    public Boolean isPartiallyRefundable;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = -5563173906400285078L;

    public FarePolicy withIsChangeAllowed(Boolean isChangeAllowed) {
        this.isChangeAllowed = isChangeAllowed;
        return this;
    }

    public FarePolicy withIsPartiallyChangeable(Boolean isPartiallyChangeable) {
        this.isPartiallyChangeable = isPartiallyChangeable;
        return this;
    }

    public FarePolicy withIsCancellationAllowed(Boolean isCancellationAllowed) {
        this.isCancellationAllowed = isCancellationAllowed;
        return this;
    }

    public FarePolicy withIsPartiallyRefundable(Boolean isPartiallyRefundable) {
        this.isPartiallyRefundable = isPartiallyRefundable;
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

    public FarePolicy withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
