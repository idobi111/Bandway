
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "subtitle",
    "average",
    "localisedRating",
    "title"
})

public class Rating implements Serializable
{

    @JsonProperty("subtitle")
    public String subtitle;
    @JsonProperty("average")
    public String average;
    @JsonProperty("localisedRating")
    public LocalisedRating localisedRating;
    @JsonProperty("title")
    public String title;
    private final static long serialVersionUID = -701253980074266005L;

}
