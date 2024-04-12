package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.Valid;
import lombok.Data;

import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "token",
        "context",
        "itineraries",
        "messages",
        "filterStats",
        "flightsSessionId",
        "destinationImageUrl"
})
@Data
public class FlightData {

    @JsonProperty("token")
    public String token;
    @JsonProperty("context")
    @Valid
    public Context context;
    @JsonProperty("itineraries")
    @Valid
    public List<Itinerary> itineraries;
    @JsonProperty("messages")
    @Valid
    public List<Object> messages;
    @JsonProperty("filterStats")
    @Valid
    public FilterStats filterStats;
    @JsonProperty("flightsSessionId")
    public String flightsSessionId;
    @JsonProperty("destinationImageUrl")
    public String destinationImageUrl;


}
