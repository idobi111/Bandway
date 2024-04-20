package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.io.Serializable;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "id",
        "name",
        "displayCode",
        "city",
        "country",
        "isHighlighted"
})
public class DestinationOrder implements Serializable {

    @JsonProperty("id")
    public String id;
    @JsonProperty("name")
    public String name;
    @JsonProperty("displayCode")
    public String displayCode;
    @JsonProperty("city")
    public String city;
    @JsonProperty("country")
    public String country;
    @JsonProperty("isHighlighted")
    public Boolean isHighlighted;

}
