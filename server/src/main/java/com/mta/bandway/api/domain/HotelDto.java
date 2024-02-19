package com.mta.bandway.api.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HotelDto {
    private String city;
    private String checkIn;
    private String checkOut;
    private int rooms;
    private int adults;
    private int children;
}
