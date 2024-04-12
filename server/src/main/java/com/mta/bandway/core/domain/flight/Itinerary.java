package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "id",
        "price",
        "legs",
        "isSelfTransfer",
        "isProtectedSelfTransfer",
        "farePolicy",
        "fareAttributes",
        "isMashUp",
        "hasFlexibleOptions",
        "score",
        "eco"
})

@Data
public class Itinerary implements Serializable {

    @JsonProperty("id")
    public String id;
    @JsonProperty("price")
    public Price price;
    @JsonProperty("legs")
    public List<Leg> legs;
    @JsonProperty("isSelfTransfer")
    public Boolean isSelfTransfer;
    @JsonProperty("isProtectedSelfTransfer")
    public Boolean isProtectedSelfTransfer;
    @JsonProperty("farePolicy")
    public FarePolicy farePolicy;
    @JsonProperty("fareAttributes")
    public FareAttributes fareAttributes;
    @JsonProperty("isMashUp")
    public Boolean isMashUp;
    @JsonProperty("hasFlexibleOptions")
    public Boolean hasFlexibleOptions;
    @JsonProperty("score")
    public Double score;
    @JsonProperty("eco")
    public Eco eco;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();

    public Itinerary withId(String id) {
        this.id = id;
        return this;
    }

    public Itinerary withPrice(Price price) {
        this.price = price;
        return this;
    }

    public Itinerary withLegs(List<Leg> legs) {
        this.legs = legs;
        return this;
    }

    public Itinerary withIsSelfTransfer(Boolean isSelfTransfer) {
        this.isSelfTransfer = isSelfTransfer;
        return this;
    }

    public Itinerary withIsProtectedSelfTransfer(Boolean isProtectedSelfTransfer) {
        this.isProtectedSelfTransfer = isProtectedSelfTransfer;
        return this;
    }

    public Itinerary withFarePolicy(FarePolicy farePolicy) {
        this.farePolicy = farePolicy;
        return this;
    }

    public Itinerary withFareAttributes(FareAttributes fareAttributes) {
        this.fareAttributes = fareAttributes;
        return this;
    }

    public Itinerary withIsMashUp(Boolean isMashUp) {
        this.isMashUp = isMashUp;
        return this;
    }

    public Itinerary withHasFlexibleOptions(Boolean hasFlexibleOptions) {
        this.hasFlexibleOptions = hasFlexibleOptions;
        return this;
    }

    public Itinerary withScore(Double score) {
        this.score = score;
        return this;
    }

    public Itinerary withEco(Eco eco) {
        this.eco = eco;
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

    public Itinerary withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
