
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
    "flightPlaceId",
    "displayCode",
    "name",
    "type"
})

public class Parent implements Serializable
{

    @JsonProperty("flightPlaceId")
    public String flightPlaceId;
    @JsonProperty("displayCode")
    public String displayCode;
    @JsonProperty("name")
    public String name;
    @JsonProperty("type")
    public String type;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = 20862892718856361L;

    public Parent withFlightPlaceId(String flightPlaceId) {
        this.flightPlaceId = flightPlaceId;
        return this;
    }

    public Parent withDisplayCode(String displayCode) {
        this.displayCode = displayCode;
        return this;
    }

    public Parent withName(String name) {
        this.name = name;
        return this;
    }

    public Parent withType(String type) {
        this.type = type;
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

    public Parent withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
