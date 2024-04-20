
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "displayValue",
    "rawValue"
})

public class LocalisedRating implements Serializable
{

    @JsonProperty("displayValue")
    public String displayValue;
    @JsonProperty("rawValue")
    public Float rawValue;
    private final static long serialVersionUID = -1735410938481751009L;

}
