package com.mta.bandway.api.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CarRentalResponseDto {

    @Schema(description = "Car manufacturer")
    @JsonProperty("manufacturer")
    private String manufacturer;

    @Schema(description = "Car model")
    @JsonProperty("model")
    private String model;

    @Schema(description = "Price per day for renting the car")
    @JsonProperty("pricePerDay")
    private Double pricePerDay;

    @Schema(description = "Availability status of the car")
    @JsonProperty("available")
    private Boolean available;

}
