package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class Destination__1 implements Serializable {

    @JsonProperty("flightPlaceId")
    public String flightPlaceId;
    @JsonProperty("displayCode")
    public String displayCode;
    @JsonProperty("parent")
    public Parent__1 parent;
    @JsonProperty("name")
    public String name;
    @JsonProperty("type")
    public String type;
    @JsonProperty("country")
    public String country;

}
