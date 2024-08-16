package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CarResourceData {

    @JsonProperty("pu")
    private String pickUp;
    @JsonProperty("do")
    private String dropOff;
    @JsonProperty("vndr")
    private String vndr;
    @JsonProperty("price")
    private Double price;
    @JsonProperty("prv_id")
    private String prvId;
    @JsonProperty("original_car_name")
    private String originalCarName;
    @JsonProperty("group")
    private String group;
    @JsonProperty("dplnk")
    private String dplnk;
    @JsonProperty("fuel_type")
    private String fuelType;
    @JsonProperty("vndr_rating")
    private VndrRating vndrRating;
    @JsonProperty("seat")
    private Integer seat;


}