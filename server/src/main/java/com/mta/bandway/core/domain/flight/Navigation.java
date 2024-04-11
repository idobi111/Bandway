
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
    "entityId",
    "entityType",
    "localizedName",
    "relevantFlightParams",
    "relevantHotelParams"
})

public class Navigation implements Serializable
{

    @JsonProperty("entityId")
    public String entityId;
    @JsonProperty("entityType")
    public String entityType;
    @JsonProperty("localizedName")
    public String localizedName;
    @JsonProperty("relevantFlightParams")
    public RelevantFlightParams relevantFlightParams;
    @JsonProperty("relevantHotelParams")
    public RelevantHotelParams relevantHotelParams;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = 1613688952252043101L;

    public Navigation withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }

    public Navigation withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }

    public Navigation withLocalizedName(String localizedName) {
        this.localizedName = localizedName;
        return this;
    }

    public Navigation withRelevantFlightParams(RelevantFlightParams relevantFlightParams) {
        this.relevantFlightParams = relevantFlightParams;
        return this;
    }

    public Navigation withRelevantHotelParams(RelevantHotelParams relevantHotelParams) {
        this.relevantHotelParams = relevantHotelParams;
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

    public Navigation withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
