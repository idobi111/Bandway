package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.*;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "id",
        "logoUrl",
        "name"
})
public class Carrier implements Serializable {

    private final static long serialVersionUID = -6352364179190490003L;
    @JsonProperty("id")
    public Integer id;
    @JsonProperty("logoUrl")
    public String logoUrl;
    @JsonProperty("name")
    public String name;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();

    public Carrier withId(Integer id) {
        this.id = id;
        return this;
    }

    public Carrier withLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
        return this;
    }

    public Carrier withName(String name) {
        this.name = name;
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

    public Carrier withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
