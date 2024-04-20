
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "v_id",
    "suitcases",
    "image_thumbnail_url",
    "seats",
    "label",
    "badges",
    "fuel_policy",
    "aircon",
    "doors",
    "fuel_type",
    "special_offer_text",
    "group",
    "transmission",
    "cma_compliant",
    "fuel_policy_description",
    "free_cancellation",
    "unlimited_mileage",
    "airbags",
    "image_url",
    "mileage",
    "insurance_package",
    "v_name"
})

public class VehicleInfo implements Serializable
{

    @JsonProperty("v_id")
    public String vId;
    @JsonProperty("suitcases")
    public Suitcases suitcases;
    @JsonProperty("image_thumbnail_url")
    public String imageThumbnailUrl;
    @JsonProperty("seats")
    public String seats;
    @JsonProperty("label")
    public String label;
    @JsonProperty("badges")
    public Badges badges;
    @JsonProperty("fuel_policy")
    public String fuelPolicy;
    @JsonProperty("aircon")
    public Integer aircon;
    @JsonProperty("doors")
    public String doors;
    @JsonProperty("fuel_type")
    public String fuelType;
    @JsonProperty("special_offer_text")
    public Object specialOfferText;
    @JsonProperty("group")
    public String group;
    @JsonProperty("transmission")
    public String transmission;
    @JsonProperty("cma_compliant")
    public Integer cmaCompliant;
    @JsonProperty("fuel_policy_description")
    public String fuelPolicyDescription;
    @JsonProperty("free_cancellation")
    public Integer freeCancellation;
    @JsonProperty("unlimited_mileage")
    public Integer unlimitedMileage;
    @JsonProperty("airbags")
    public Integer airbags;
    @JsonProperty("image_url")
    public String imageUrl;
    @JsonProperty("mileage")
    public String mileage;
    @JsonProperty("insurance_package")
    public String insurancePackage;
    @JsonProperty("v_name")
    public String vName;
    private final static long serialVersionUID = -5301513275764125916L;

}
