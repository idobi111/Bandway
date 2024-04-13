
package com.mta.bandway.core.domain.flight;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "id",
    "name",
    "displayCode",
    "city",
    "country",
    "isHighlighted"
})
public class Destination implements Serializable
{

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
    private final static long serialVersionUID = 5835392139765229937L;

}
