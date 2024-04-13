
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
    "direct",
    "one",
    "twoOrMore"
})

public class StopPrices implements Serializable
{

    @JsonProperty("direct")
    public Direct direct;
    @JsonProperty("one")
    public One one;
    @JsonProperty("twoOrMore")
    public TwoOrMore twoOrMore;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = 7271673833939808220L;

    public StopPrices withDirect(Direct direct) {
        this.direct = direct;
        return this;
    }

    public StopPrices withOne(One one) {
        this.one = one;
        return this;
    }

    public StopPrices withTwoOrMore(TwoOrMore twoOrMore) {
        this.twoOrMore = twoOrMore;
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

    public StopPrices withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
