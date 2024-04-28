package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class SupplierInfo implements Serializable {

    @JsonProperty("location_type")
    private String locationType;
    @JsonProperty("may_require_credit_card_guarantee")
    private Boolean mayRequireCreditCardGuarantee;
    @JsonProperty("longitude")
    private String longitude;
    @JsonProperty("dropoff_instructions")
    private String dropoffInstructions;
    @JsonProperty("address")
    private String address;
    @JsonProperty("logo_url")
    private String logoUrl;
    @JsonProperty("name")
    private String name;


}
