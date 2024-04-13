package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class Leg implements Serializable {

    @JsonProperty("id")
    private String id;
    @JsonProperty("origin")
    private Origin origin;
    @JsonProperty("destination")
    private Destination destination;
    @JsonProperty("durationInMinutes")
    private Integer durationInMinutes;
    @JsonProperty("stopCount")
    private Integer stopCount;
    @JsonProperty("isSmallestStops")
    private Boolean isSmallestStops;
    @JsonProperty("departure")
    private String departure;
    @JsonProperty("arrival")
    private String arrival;
    @JsonProperty("timeDeltaInDays")
    private Integer timeDeltaInDays;
    @JsonProperty("carriers")
    private Carriers carriers;
    @JsonProperty("segments")
    private List<Segment> segments;

}
