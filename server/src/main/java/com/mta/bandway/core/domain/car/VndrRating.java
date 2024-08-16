package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class VndrRating {

    @JsonProperty("overall_rating")
    private Double overallRating;

}
