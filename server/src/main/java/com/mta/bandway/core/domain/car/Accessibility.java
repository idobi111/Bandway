
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "pick_up_location",
    "supplier_rating",
    "fuel_policy",
    "transmission"
})

public class Accessibility implements Serializable
{

    @JsonProperty("pick_up_location")
    public String pickUpLocation;
    @JsonProperty("supplier_rating")
    public String supplierRating;
    @JsonProperty("fuel_policy")
    public String fuelPolicy;
    @JsonProperty("transmission")
    public String transmission;
    private final static long serialVersionUID = 4653733943892323344L;

}
