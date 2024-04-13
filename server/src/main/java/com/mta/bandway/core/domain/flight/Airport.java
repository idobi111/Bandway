
package com.mta.bandway.core.domain.flight;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "city",
    "airports"
})
public class Airport implements Serializable
{

    @JsonProperty("city")
    public String city;
    @JsonProperty("airports")
    public List<Airport__1> airports;
    private final static long serialVersionUID = 6177588256305675092L;

}
