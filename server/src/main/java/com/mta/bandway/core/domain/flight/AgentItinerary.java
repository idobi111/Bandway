package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class AgentItinerary {
    @JsonProperty("pricingOptions")
    private List<PricingOption> pricingOptions;

}
