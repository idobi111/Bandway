package com.mta.bandway.api.domain.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.mta.bandway.core.domain.car.auto.correct.CarCategory;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class CarRentalRequestDto {

    @Schema(description = "Pickup start date", example = "2024-04-25")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date pickupStartDate;

    @Schema(description = "Dropoff end date", example = "2024-04-27")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date dropoffEndDate;

    @Schema(description = "Pickup city", example = "(new york): eyJsYXRpdHVkZSI6IjQwLjc1OTU5IiwibG9uZ2l0dWRlIjoiLTczLjk4NDkxIn0=")
    @JsonProperty(value = "pickupCity", required = true)
    private String pickupCity;

    @Schema(description = "Dropoff city", example = "(new york): eyJsYXRpdHVkZSI6IjQwLjc1OTU5IiwibG9uZ2l0dWRlIjoiLTczLjk4NDkxIn0=")
    @JsonProperty(value = "dropoffCity", required = true)
    private String dropoffCity;

    @Schema(description = "Pickup time", example = "00:00", defaultValue = "00:00")
    @JsonProperty(value = "pickupTime", defaultValue = "00:00")
    private String pickupTime;

    @Schema(description = "Dropoff time", example = "00:00", defaultValue = "00:00")
    @JsonProperty(value = "dropoffTime", defaultValue = "00:00")
    private String dropoffTime;

    @Schema(description = "Driver age")
    @JsonProperty("driverAge")
    private Integer driverAge;

    @Schema(description = "Car type")
    @JsonProperty("carType")
    private List<CarCategory> carType;

    @Schema(description = "Whether the car has a hair conditioner", example = "false", defaultValue = "false")
    @JsonProperty(value = "hasHairConditioner", defaultValue = "false")
    private Boolean hasHairConditioner;

}