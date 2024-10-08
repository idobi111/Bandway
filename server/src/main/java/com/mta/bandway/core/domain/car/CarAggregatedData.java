package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
@Builder
public class CarAggregatedData {

    @Schema(description = "Car model")
    @JsonProperty("model")
    private String model;

    @Schema(description = "Price per day for renting the car")
    @JsonProperty("pricePerDay")
    private Double pricePerDay;

    @Schema(description = "Drop off address")
    @JsonProperty("dropOffAddress")
    private String dropOffAddress;

    @Schema(description = "Drop off location name")
    @JsonProperty("dropOffPlaceName")
    private String dropOffPlaceName;

    @Schema(description = "Pick up address")
    @JsonProperty("pickUpAddress")
    private String pickUpAddress;

    @Schema(description = "Pick up location name")
    @JsonProperty("pickUpPlaceName")
    private String pickUpPlaceName;

    @Schema(description = "Car image")
    @JsonProperty("image")
    private String image;

    @Schema(description = "All of the relevant details for the deal")
    @JsonProperty("dealInfo")
    private List<DealInfo> dealInfo;

    @Schema(description = "the rental period")
    @JsonProperty("rentalPeriod")
    private Integer rentalPeriod;

    @Schema(description = "Rating of the car")
    @JsonProperty("rating")
    private Double rating;

    @Schema(description = "description text ratings")
    @JsonProperty("ratingDescription")
    private String ratingDescription;

    @Schema(description = "seats number")
    @JsonProperty("seats")
    private Integer seats;

    @Schema(description = "car group")
    @JsonProperty("carGroup")
    private String carGroup;

    @Schema(description = "Transmission type")
    @JsonProperty("transmission")
    private String transmission;

    @Schema(description = "Fuel type")
    @JsonProperty("fuelType")
    private String fuelType;

    @Schema(description = "Total Price")
    @JsonProperty("totalPrice")
    private Double totalPrice;
}
