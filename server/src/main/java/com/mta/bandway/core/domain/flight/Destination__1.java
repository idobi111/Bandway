
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
    "parent",
    "name",
    "type",
    "country"
})

public class Destination__1 implements Serializable
{

    @JsonProperty("flightPlaceId")
    public String flightPlaceId;
    @JsonProperty("displayCode")
    public String displayCode;
    @JsonProperty("parent")
    public Parent__1 parent;
    @JsonProperty("name")
    public String name;
    @JsonProperty("type")
    public String type;
    @JsonProperty("country")
    public String country;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = -4986441075467807949L;

    public Destination__1 withFlightPlaceId(String flightPlaceId) {
        this.flightPlaceId = flightPlaceId;
        return this;
    }

    public Destination__1 withDisplayCode(String displayCode) {
        this.displayCode = displayCode;
        return this;
    }

    public Destination__1 withParent(Parent__1 parent) {
        this.parent = parent;
        return this;
    }

    public Destination__1 withName(String name) {
        this.name = name;
        return this;
    }

    public Destination__1 withType(String type) {
        this.type = type;
        return this;
    }

    public Destination__1 withCountry(String country) {
        this.country = country;
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

    public Destination__1 withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
