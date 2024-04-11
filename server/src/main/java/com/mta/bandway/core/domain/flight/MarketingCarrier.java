
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
    "id",
    "name",
    "alternateId",
    "allianceId",
    "displayCode"
})

public class MarketingCarrier implements Serializable
{

    @JsonProperty("id")
    public Integer id;
    @JsonProperty("name")
    public String name;
    @JsonProperty("alternateId")
    public String alternateId;
    @JsonProperty("allianceId")
    public Integer allianceId;
    @JsonProperty("displayCode")
    public String displayCode;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = -8928282646424968571L;

    public MarketingCarrier withId(Integer id) {
        this.id = id;
        return this;
    }

    public MarketingCarrier withName(String name) {
        this.name = name;
        return this;
    }

    public MarketingCarrier withAlternateId(String alternateId) {
        this.alternateId = alternateId;
        return this;
    }

    public MarketingCarrier withAllianceId(Integer allianceId) {
        this.allianceId = allianceId;
        return this;
    }

    public MarketingCarrier withDisplayCode(String displayCode) {
        this.displayCode = displayCode;
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

    public MarketingCarrier withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
