
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "big",
    "small"
})

public class Suitcases implements Serializable
{

    @JsonProperty("big")
    public String big;
    @JsonProperty("small")
    public String small;
    private final static long serialVersionUID = -3733632688947518820L;

}
