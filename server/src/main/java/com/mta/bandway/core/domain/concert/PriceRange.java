package com.mta.bandway.core.domain.concert;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class PriceRange {

    @JsonProperty("currency")
    private String currency;
    @JsonProperty("min")
    private Float min;
    @JsonProperty("max")
    private Float max;

}
