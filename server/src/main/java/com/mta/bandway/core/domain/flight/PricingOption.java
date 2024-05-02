package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class PricingOption {

    @JsonProperty("agents")
    private List<Agent> agents;
    @JsonProperty("totalPrice")
    private Double totalPrice;

}
