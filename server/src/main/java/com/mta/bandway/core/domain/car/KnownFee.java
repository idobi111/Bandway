
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "type",
    "currency",
    "is_tax_included",
    "amount",
    "min_amount",
    "max_amount",
    "is_always_payable",
    "distance_allowed"
})

public class KnownFee implements Serializable
{

    @JsonProperty("type")
    public String type;
    @JsonProperty("currency")
    public Object currency;
    @JsonProperty("is_tax_included")
    public Object isTaxIncluded;
    @JsonProperty("amount")
    public Object amount;
    @JsonProperty("min_amount")
    public Object minAmount;
    @JsonProperty("max_amount")
    public Object maxAmount;
    @JsonProperty("is_always_payable")
    public Integer isAlwaysPayable;
    @JsonProperty("distance_allowed")
    public DistanceAllowed distanceAllowed;
    private final static long serialVersionUID = 5931168716329598596L;

}
