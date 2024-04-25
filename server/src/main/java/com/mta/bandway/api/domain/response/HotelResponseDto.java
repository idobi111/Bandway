package com.mta.bandway.api.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class HotelResponseDto {

    @Schema(description = "Hotel ID")
    @JsonProperty("hotelId")
    private Integer hotelId;

    @Schema(description = "City where the hotel is located")
    @JsonProperty("city")
    private String city;

    @Schema(description = "Name of the hotel")
    @JsonProperty("hotelName")
    private String hotelName;

    @Schema(description = "Check-in date in 'yyyy-MM-dd' format")
    @JsonProperty("checkIn")
    private String checkIn;

    @Schema(description = "Check-out date in 'yyyy-MM-dd' format")
    @JsonProperty("checkOut")
    private String checkOut;

    @Schema(description = "Number of rooms available")
    @JsonProperty("rooms")
    private Integer rooms;

    @Schema(description = "Number of adults")
    @JsonProperty("adults")
    private Integer adults;

    @Schema(description = "Number of children")
    @JsonProperty("children")
    private Integer children;

    @Schema(description = "Price of the hotel")
    @JsonProperty("price")
    private Double price;

    @Schema(description = "Rating of the hotel")
    @JsonProperty("rating")
    private Double rating;

    @Schema(description = "List of photo URLs of the hotel")
    @JsonProperty("photoUrl")
    private List<String> photoUrl;

    @Schema(description = "Booking URL of the hotel")
    @JsonProperty("bookingUrl")
    private String bookingUrl;

}
