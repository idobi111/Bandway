package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class Destination implements Serializable {

    @JsonProperty("flightPlaceId")
    private String flightPlaceId;
    @JsonProperty("displayCode")
    private String displayCode;
    @JsonProperty("parent")
    private Parent parent;
    @JsonProperty("country")
    private String country;

}
