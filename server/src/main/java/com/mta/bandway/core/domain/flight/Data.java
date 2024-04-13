package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;
import java.util.List;

@lombok.Data
public class Data implements Serializable {
    @JsonProperty("itineraries")
    public List<Itinerary> itineraries;
    @JsonProperty("flightsSessionId")
    public String flightsSessionId;
    @JsonProperty("destinationImageUrl")
    public String destinationImageUrl;

}
