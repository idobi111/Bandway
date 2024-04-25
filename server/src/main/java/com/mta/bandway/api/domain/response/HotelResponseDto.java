package com.mta.bandway.api.domain.response;

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
    private Integer hotelId;

    @Schema(description = "City where the hotel is located")
    private String city;

    @Schema(description = "Name of the hotel")
    private String hotelName;

    @Schema(description = "Check-in date in 'yyyy-MM-dd' format")
    private String checkIn;

    @Schema(description = "Check-out date in 'yyyy-MM-dd' format")
    private String checkOut;

    @Schema(description = "Number of rooms available")
    private Integer rooms;

    @Schema(description = "Number of adults")
    private Integer adults;

    @Schema(description = "Number of children")
    private Integer children;

    @Schema(description = "Price of the hotel")
    private Double price;

    @Schema(description = "Rating of the hotel")
    private Double rating;

    @Schema(description = "List of photo URLs of the hotel")
    private List<String> photoUrl;

    @Schema(description = "Booking URL of the hotel")
    private String bookingUrl;

}
