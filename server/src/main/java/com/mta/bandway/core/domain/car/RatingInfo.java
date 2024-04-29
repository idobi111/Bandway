package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data

public class RatingInfo implements Serializable {

    @JsonProperty("average")
    private Double average;
    @JsonProperty("average_text")
    private String averageText;

}
