package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class VehicleInfo implements Serializable {

    @JsonProperty("v_id")
    private String vId;
    @JsonProperty("seats")
    private String seats;
    @JsonProperty("group")
    private String group;
    @JsonProperty("transmission")
    private String transmission;
    @JsonProperty("image_url")
    private String imageUrl;
    @JsonProperty("v_name")
    private String vName;

}
