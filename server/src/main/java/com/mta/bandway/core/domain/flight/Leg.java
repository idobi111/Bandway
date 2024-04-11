
package com.mta.bandway.core.domain.flight;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.List;
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
    "origin",
    "destination",
    "durationInMinutes",
    "stopCount",
    "isSmallestStops",
    "departure",
    "arrival",
    "timeDeltaInDays",
    "carriers",
    "segments"
})

public class Leg implements Serializable
{

    @JsonProperty("id")
    public String id;
    @JsonProperty("origin")
    public Origin origin;
    @JsonProperty("destination")
    public Destination destination;
    @JsonProperty("durationInMinutes")
    public Integer durationInMinutes;
    @JsonProperty("stopCount")
    public Integer stopCount;
    @JsonProperty("isSmallestStops")
    public Boolean isSmallestStops;
    @JsonProperty("departure")
    public String departure;
    @JsonProperty("arrival")
    public String arrival;
    @JsonProperty("timeDeltaInDays")
    public Integer timeDeltaInDays;
    @JsonProperty("carriers")
    public Carriers carriers;
    @JsonProperty("segments")
    public List<Segment> segments;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = -7876849189041712677L;

    public Leg withId(String id) {
        this.id = id;
        return this;
    }

    public Leg withOrigin(Origin origin) {
        this.origin = origin;
        return this;
    }

    public Leg withDestination(Destination destination) {
        this.destination = destination;
        return this;
    }

    public Leg withDurationInMinutes(Integer durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
        return this;
    }

    public Leg withStopCount(Integer stopCount) {
        this.stopCount = stopCount;
        return this;
    }

    public Leg withIsSmallestStops(Boolean isSmallestStops) {
        this.isSmallestStops = isSmallestStops;
        return this;
    }

    public Leg withDeparture(String departure) {
        this.departure = departure;
        return this;
    }

    public Leg withArrival(String arrival) {
        this.arrival = arrival;
        return this;
    }

    public Leg withTimeDeltaInDays(Integer timeDeltaInDays) {
        this.timeDeltaInDays = timeDeltaInDays;
        return this;
    }

    public Leg withCarriers(Carriers carriers) {
        this.carriers = carriers;
        return this;
    }

    public Leg withSegments(List<Segment> segments) {
        this.segments = segments;
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

    public Leg withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
