package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class CarResponse {

    @JsonProperty("status")
    private Boolean status;
    @JsonProperty("data")
    private CarData data;

}
