package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
@Builder
public class RoundWayDataResponse implements Serializable {

    @JsonProperty("token")
    private String token;
    @JsonProperty("itineraries")
    private List<Itinerary> itineraries;
}
