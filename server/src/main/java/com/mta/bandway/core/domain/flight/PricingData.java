package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class PricingData {

    @JsonProperty("itinerary")
    public AgentItinerary itinerary;

}
