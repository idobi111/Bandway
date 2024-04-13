
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
    "localizedName"
})

public class RelevantHotelParams implements Serializable
{

    @JsonProperty("entityId")
    public String entityId;
    @JsonProperty("entityType")
    public String entityType;
    @JsonProperty("localizedName")
    public String localizedName;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = -5779595563393752291L;

    public RelevantHotelParams withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }

    public RelevantHotelParams withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }

    public RelevantHotelParams withLocalizedName(String localizedName) {
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

    public RelevantHotelParams withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
