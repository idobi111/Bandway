package com.mta.bandway.api.domain.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.mta.bandway.core.domain.car.auto.correct.CarCategory;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class CarRentalRequestDto {
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date pickupStartDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date dropoffEndDate;
    @JsonProperty(value = "pickupCity", required = true)
    private String pickupCity;
    @JsonProperty(value = "dropoffCity", required = true)
    private String dropoffCity;
    @JsonProperty(value = "pickupTime", defaultValue = "00:00")
    private String pickupTime;
    @JsonProperty(value = "dropoffTime", defaultValue = "00:00")
    private String dropoffTime;
    @JsonProperty("driverAge")
    private Integer driverAge;
    @JsonProperty("carType")
    private List<CarCategory> carType;
    @JsonProperty(value = "hasHairConditioner", defaultValue = "false")
    private Boolean hasHairConditioner;
}
