package com.mta.bandway.core.domain.car.auto.correct;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mta.bandway.core.domain.car.auto.correct.CarDatum;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
public class AutoCompleteCarCity implements Serializable {

    @JsonProperty("data")
    private List<CarDatum> data;
    @JsonProperty("status")
    private Boolean status;
    @JsonProperty("message")
    private String message;

}
