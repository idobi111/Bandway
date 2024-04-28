package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;


@Data
@NoArgsConstructor
public class CarResponse implements Serializable {

    @JsonProperty("data")
    private CarData data;
    @JsonProperty("status")
    private Boolean status;

}
