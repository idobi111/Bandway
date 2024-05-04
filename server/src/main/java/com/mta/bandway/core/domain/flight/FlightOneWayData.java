package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class FlightOneWayData {

    @JsonProperty("itineraries")
    private List<Itinerary> itineraries;
    @JsonProperty("token")
    private String token;

}
