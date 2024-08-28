package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
public class CarMetadata {

    @JsonProperty("img")
    private String img;
    @JsonProperty("trans")
    private String trans;
    @JsonProperty("cls")
    private String cls;
    @JsonProperty("min_price")
    private Double minPrice;

    private Map<String, Object> additionalProperties = new HashMap<>();

}
