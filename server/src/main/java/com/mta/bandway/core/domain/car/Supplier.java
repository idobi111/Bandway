
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "imageUrl",
    "name",
    "rating"
})

public class Supplier implements Serializable
{

    @JsonProperty("imageUrl")
    public String imageUrl;
    @JsonProperty("name")
    public String name;
    @JsonProperty("rating")
    public Rating rating;
    private final static long serialVersionUID = 8266349693721147498L;

}
