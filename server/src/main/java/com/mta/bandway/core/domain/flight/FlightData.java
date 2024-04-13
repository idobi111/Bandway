package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.Valid;
import lombok.Data;

import java.util.List;

@Data
public class FlightData {

    @JsonProperty("token")
    private String token;
    @JsonProperty("context")
    @Valid
    private Context context;
    @JsonProperty("itineraries")
    @Valid
    private List<Itinerary> itineraries;
    @JsonProperty("messages")
    @Valid
    private List<Object> messages;
    @JsonProperty("filterStats")
    @Valid
    private FilterStats filterStats;
    @JsonProperty("flightsSessionId")
    private String flightsSessionId;
    @JsonProperty("destinationImageUrl")
    private String destinationImageUrl;


}
