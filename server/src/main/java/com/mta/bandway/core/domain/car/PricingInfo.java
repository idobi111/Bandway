package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class PricingInfo implements Serializable {

    @JsonProperty("base_price")
    public Double basePrice;
}
