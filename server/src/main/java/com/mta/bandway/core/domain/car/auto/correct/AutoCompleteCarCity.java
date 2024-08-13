package com.mta.bandway.core.domain.car.auto.correct;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class AutoCompleteCarCity {

    @JsonProperty("status")
    private Boolean status;
    @JsonProperty("data")
    private List<CarDatum> data;

}
