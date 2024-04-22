package com.mta.bandway.api.domain.response;

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
    private Integer hotelId;
    private String city;
    private String hotelName;
    private String checkIn;
    private String checkOut;
    private Integer rooms;
    private Integer adults;
    private Integer children;
    private Double price;
    private Double rating;
    private List<String> photoUrl;
    private String bookingUrl;
}
