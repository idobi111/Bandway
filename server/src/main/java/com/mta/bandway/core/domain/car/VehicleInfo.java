package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class VehicleInfo implements Serializable {

    @JsonProperty("v_id")
    private String vId;
    @JsonProperty("suitcases")
    private Suitcases suitcases;
    @JsonProperty("image_thumbnail_url")
    private String imageThumbnailUrl;
    @JsonProperty("seats")
    private String seats;
    @JsonProperty("label")
    private String label;
    @JsonProperty("badges")
    private Badges badges;
    @JsonProperty("fuel_policy")
    private String fuelPolicy;
    @JsonProperty("aircon")
    private Integer aircon;
    @JsonProperty("doors")
    private String doors;
    @JsonProperty("fuel_type")
    private String fuelType;
    @JsonProperty("special_offer_text")
    private Object specialOfferText;
    @JsonProperty("group")
    private String group;
    @JsonProperty("transmission")
    private String transmission;
    @JsonProperty("cma_compliant")
    private Integer cmaCompliant;
    @JsonProperty("fuel_policy_description")
    private String fuelPolicyDescription;
    @JsonProperty("free_cancellation")
    private Integer freeCancellation;
    @JsonProperty("unlimited_mileage")
    private Integer unlimitedMileage;
    @JsonProperty("airbags")
    private Integer airbags;
    @JsonProperty("image_url")
    private String imageUrl;
    @JsonProperty("mileage")
    private String mileage;
    @JsonProperty("insurance_package")
    private String insurancePackage;
    @JsonProperty("v_name")
    private String vName;

}
