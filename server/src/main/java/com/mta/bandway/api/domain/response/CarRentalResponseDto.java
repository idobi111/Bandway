package com.mta.bandway.api.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mta.bandway.core.domain.car.CarAggregatedData;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class CarRentalResponseDto {
    @JsonProperty("carRentalData")
    @Schema(description = "Details of car rental")
    List<CarAggregatedData> carRentalData;

    @JsonProperty("minPrice")
    @Schema(description = "Minimum price of the car rental")
    private Double minPrice;

    @JsonProperty("maxPrice")
    @Schema(description = "maximum price of the car rental")
    private Double maxPrice;

    @JsonProperty("checkIn")
    @Schema(description = "Check-in date")
    private String checkIn;

    @JsonProperty("checkOut")
    @Schema(description = "Check-out date")
    private String checkOut;
}
