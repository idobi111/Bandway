package com.mta.bandway.api.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CarRentalResponseDto {
    @JsonProperty("manufacturer")
    private String manufacturer;
    @JsonProperty("model")
    private String model;
    @JsonProperty("price_per_day")
    private double pricePerDay;
    @JsonProperty("available")
    private boolean available;
}
