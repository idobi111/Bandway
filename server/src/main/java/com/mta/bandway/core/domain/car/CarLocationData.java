package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class CarLocationData implements Serializable {
    @JsonProperty("address")
    private String address;
    @JsonProperty("name")
    private String name;
}
