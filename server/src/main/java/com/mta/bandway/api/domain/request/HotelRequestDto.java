package com.mta.bandway.api.domain.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.Date;

@Data
public class HotelRequestDto {

    @Schema(description = "Name of the venue", example = "Johan Cruijff ArenA")
    @JsonProperty("venueName")
    private String venueName;

    @Schema(description = "Check-in date", example = "2024-04-25")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date checkIn;

    @Schema(description = "Check-out date", example = "2024-04-27")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date checkOut;

    @Schema(description = "Number of rooms", example = "1", defaultValue = "1")
    @JsonProperty("rooms")
    private int rooms;

    @Schema(description = "Number of adults", example = "1", defaultValue = "1")
    @JsonProperty("adults")
    private int adults = 1; // Default value set to 1

    @Schema(description = "Number of children", example = "0")
    @JsonProperty("children")
    private int children;

    @Schema(description = "Maximum price per room", example = "100")
    @JsonProperty("maxPrice")
    private int maxPrice;

    @Schema(description = "Minimum price per room", example = "0")
    @JsonProperty("minPrice")
    private int minPrice;

}