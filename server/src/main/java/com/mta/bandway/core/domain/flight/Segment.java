package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Data;

import java.io.Serializable;

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
@Data
public class Segment implements Serializable {

    @JsonProperty("id")
    private String id;
    @JsonProperty("origin")
    private Origin origin;
    @JsonProperty("departure")
    private String departure;
    @JsonProperty("destination")
    private Destination destination;
    @JsonProperty("arrival")
    private String arrival;
    @JsonProperty("durationInMinutes")
    private Integer durationInMinutes;
    @JsonProperty("flightNumber")
    private String flightNumber;
    @JsonProperty("marketingCarrier")
    private MarketingCarrier marketingCarrier;
    @JsonProperty("operatingCarrier")
    private OperatingCarrier operatingCarrier;


}
