
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "location_type",
    "may_require_credit_card_guarantee",
    "longitude",
    "dropoff_instructions",
    "address",
    "logo_url",
    "pickup_instructions",
    "name",
    "latitude"
})

public class SupplierInfo implements Serializable
{

    @JsonProperty("location_type")
    public String locationType;
    @JsonProperty("may_require_credit_card_guarantee")
    public Boolean mayRequireCreditCardGuarantee;
    @JsonProperty("longitude")
    public String longitude;
    @JsonProperty("dropoff_instructions")
    public String dropoffInstructions;
    @JsonProperty("address")
    public String address;
    @JsonProperty("logo_url")
    public String logoUrl;
    @JsonProperty("pickup_instructions")
    public String pickupInstructions;
    @JsonProperty("name")
    public String name;
    @JsonProperty("latitude")
    public String latitude;
    private final static long serialVersionUID = -6044332169495664039L;

}
