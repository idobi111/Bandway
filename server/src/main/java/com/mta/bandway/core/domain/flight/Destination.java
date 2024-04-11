
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
    "displayCode",
    "city",
    "country",
    "isHighlighted"
})

public class Destination implements Serializable
{

    @JsonProperty("id")
    public String id;
    @JsonProperty("name")
    public String name;
    @JsonProperty("displayCode")
    public String displayCode;
    @JsonProperty("city")
    public String city;
    @JsonProperty("country")
    public String country;
    @JsonProperty("isHighlighted")
    public Boolean isHighlighted;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = 9088770208549765556L;

    public Destination withId(String id) {
        this.id = id;
        return this;
    }

    public Destination withName(String name) {
        this.name = name;
        return this;
    }

    public Destination withDisplayCode(String displayCode) {
        this.displayCode = displayCode;
        return this;
    }

    public Destination withCity(String city) {
        this.city = city;
        return this;
    }

    public Destination withCountry(String country) {
        this.country = country;
        return this;
    }

    public Destination withIsHighlighted(Boolean isHighlighted) {
        this.isHighlighted = isHighlighted;
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

    public Destination withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
