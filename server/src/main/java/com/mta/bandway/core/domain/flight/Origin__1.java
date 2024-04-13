package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class Origin__1 implements Serializable {

    @JsonProperty("flightPlaceId")
    private String flightPlaceId;
    @JsonProperty("displayCode")
    private String displayCode;
    @JsonProperty("parent")
    private Parent parent;
    @JsonProperty("name")
    private String name;
    @JsonProperty("type")
    private String type;
    @JsonProperty("country")
    private String country;

}