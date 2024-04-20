package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;


@Data
@NoArgsConstructor
public class CarResponse implements Serializable {

    @JsonProperty("data")
    public CarData data;
    @JsonProperty("status")
    public Boolean status;
    @JsonProperty("message")
    public String message;

}
