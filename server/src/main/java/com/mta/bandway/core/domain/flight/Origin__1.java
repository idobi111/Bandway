
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

public class Origin__1 implements Serializable
{

    @JsonProperty("flightPlaceId")
    public String flightPlaceId;
    @JsonProperty("displayCode")
    public String displayCode;
    @JsonProperty("parent")
    public Parent parent;
    @JsonProperty("name")
    public String name;
    @JsonProperty("type")
    public String type;
    @JsonProperty("country")
    public String country;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = 5649441165550787131L;

    public Origin__1 withFlightPlaceId(String flightPlaceId) {
        this.flightPlaceId = flightPlaceId;
        return this;
    }

    public Origin__1 withDisplayCode(String displayCode) {
        this.displayCode = displayCode;
        return this;
    }

    public Origin__1 withParent(Parent parent) {
        this.parent = parent;
        return this;
    }

    public Origin__1 withName(String name) {
        this.name = name;
        return this;
    }

    public Origin__1 withType(String type) {
        this.type = type;
        return this;
    }

    public Origin__1 withCountry(String country) {
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

    public Origin__1 withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
