
package com.mta.bandway.core.domain.car;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "fuel_policy",
    "known_fees"
})

public class FeeBreakdown implements Serializable
{

    @JsonProperty("fuel_policy")
    public FuelPolicy fuelPolicy;
    @JsonProperty("known_fees")
    public List<KnownFee> knownFees;
    private final static long serialVersionUID = -3137341699082991569L;

}
