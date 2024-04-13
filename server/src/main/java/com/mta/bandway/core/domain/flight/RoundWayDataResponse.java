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
    @JsonProperty("context")
    private Context context;
    @JsonProperty("itineraries")
    private List<Itinerary> itineraries;
    @JsonProperty("messages")
    private List<Object> messages;
    @JsonProperty("filterStats")
    private FilterStats filterStats;
    @JsonProperty("flightsSessionId")
    private String flightsSessionId;
    @JsonProperty("destinationImageUrl")
    private String destinationImageUrl;

}
