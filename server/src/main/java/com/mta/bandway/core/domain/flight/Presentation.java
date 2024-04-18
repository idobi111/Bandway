
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
    "title",
    "suggestionTitle",
    "subtitle"
})

public class Presentation implements Serializable
{

    @JsonProperty("title")
    public String title;
    @JsonProperty("suggestionTitle")
    public String suggestionTitle;
    @JsonProperty("subtitle")
    public String subtitle;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = -9197753139403343659L;

    public Presentation withTitle(String title) {
        this.title = title;
        return this;
    }

    public Presentation withSuggestionTitle(String suggestionTitle) {
        this.suggestionTitle = suggestionTitle;
        return this;
    }

    public Presentation withSubtitle(String subtitle) {
        this.subtitle = subtitle;
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

    public Presentation withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
