package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.*;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "id",
        "presentation",
        "navigation"
})

public class Datum implements Serializable {

    private final static long serialVersionUID = 6829314395055981295L;
    @JsonProperty("id")
    public String id;
    @JsonProperty("presentation")
    public Presentation presentation;
    @JsonProperty("navigation")
    public Navigation navigation;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();

    public Datum withId(String id) {
        this.id = id;
        return this;
    }

    public Datum withPresentation(Presentation presentation) {
        this.presentation = presentation;
        return this;
    }

    public Datum withNavigation(Navigation navigation) {
        this.navigation = navigation;
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

    public Datum withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
