
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "no_of_ratings",
    "location",
    "pickup_time",
    "cleanliness",
    "condition",
    "average",
    "average_text",
    "dropoff_time",
    "value_for_money",
    "efficiency"
})

public class RatingInfo implements Serializable
{

    @JsonProperty("no_of_ratings")
    public Integer noOfRatings;
    @JsonProperty("location")
    public Float location;
    @JsonProperty("pickup_time")
    public Float pickupTime;
    @JsonProperty("cleanliness")
    public Integer cleanliness;
    @JsonProperty("condition")
    public Integer condition;
    @JsonProperty("average")
    public Float average;
    @JsonProperty("average_text")
    public String averageText;
    @JsonProperty("dropoff_time")
    public Float dropoffTime;
    @JsonProperty("value_for_money")
    public Float valueForMoney;
    @JsonProperty("efficiency")
    public Float efficiency;
    private final static long serialVersionUID = -5311619975493896155L;

}
