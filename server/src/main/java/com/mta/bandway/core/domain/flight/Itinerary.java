package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.List;


@Data
public class Itinerary implements Serializable {

    @JsonProperty("id")
    private String id;
    @JsonProperty("price")
    private Price price;
    @JsonProperty("legs")
    private List<Leg> legs;
    @JsonProperty("score")
    private Double score;

}
