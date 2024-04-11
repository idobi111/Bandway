
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
    "skyId",
    "entityId",
    "flightPlaceType",
    "localizedName"
})

public class RelevantFlightParams implements Serializable
{

    @JsonProperty("skyId")
    public String skyId;
    @JsonProperty("entityId")
    public String entityId;
    @JsonProperty("flightPlaceType")
    public String flightPlaceType;
    @JsonProperty("localizedName")
    public String localizedName;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = 1731125919678698205L;

    public RelevantFlightParams withSkyId(String skyId) {
        this.skyId = skyId;
        return this;
    }

    public RelevantFlightParams withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }

    public RelevantFlightParams withFlightPlaceType(String flightPlaceType) {
        this.flightPlaceType = flightPlaceType;
        return this;
    }

    public RelevantFlightParams withLocalizedName(String localizedName) {
        this.localizedName = localizedName;
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

    public RelevantFlightParams withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
