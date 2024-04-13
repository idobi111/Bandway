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
    @JsonProperty("isSelfTransfer")
    private Boolean isSelfTransfer;
    @JsonProperty("isProtectedSelfTransfer")
    private Boolean isProtectedSelfTransfer;
    @JsonProperty("farePolicy")
    private FarePolicy farePolicy;
    @JsonProperty("fareAttributes")
    private FareAttributes fareAttributes;
    @JsonProperty("isMashUp")
    private Boolean isMashUp;
    @JsonProperty("hasFlexibleOptions")
    private Boolean hasFlexibleOptions;
    @JsonProperty("score")
    private Double score;
    @JsonProperty("eco")
    private Eco eco;

}
