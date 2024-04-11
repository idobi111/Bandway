
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
    "origin",
    "destination",
    "departure",
    "arrival",
    "durationInMinutes",
    "flightNumber",
    "marketingCarrier",
    "operatingCarrier"
})

public class Segment implements Serializable
{

    @JsonProperty("id")
    public String id;
    @JsonProperty("origin")
    public Origin__1 origin;
    @JsonProperty("destination")
    public Destination__1 destination;
    @JsonProperty("departure")
    public String departure;
    @JsonProperty("arrival")
    public String arrival;
    @JsonProperty("durationInMinutes")
    public Integer durationInMinutes;
    @JsonProperty("flightNumber")
    public String flightNumber;
    @JsonProperty("marketingCarrier")
    public MarketingCarrier marketingCarrier;
    @JsonProperty("operatingCarrier")
    public OperatingCarrier operatingCarrier;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = -3828851089889796685L;

    public Segment withId(String id) {
        this.id = id;
        return this;
    }

    public Segment withOrigin(Origin__1 origin) {
        this.origin = origin;
        return this;
    }

    public Segment withDestination(Destination__1 destination) {
        this.destination = destination;
        return this;
    }

    public Segment withDeparture(String departure) {
        this.departure = departure;
        return this;
    }

    public Segment withArrival(String arrival) {
        this.arrival = arrival;
        return this;
    }

    public Segment withDurationInMinutes(Integer durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
        return this;
    }

    public Segment withFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
        return this;
    }

    public Segment withMarketingCarrier(MarketingCarrier marketingCarrier) {
        this.marketingCarrier = marketingCarrier;
        return this;
    }

    public Segment withOperatingCarrier(OperatingCarrier operatingCarrier) {
        this.operatingCarrier = operatingCarrier;
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

    public Segment withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
