package com.mta.bandway.api.domain.request;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class HotelDetailsDto implements java.io.Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private String checkInDate;
    private String checkOutDate;
    private String hotelName;
    private String hotelAddress;
    private Integer roomCount;
    private Double price;
    private Integer numberOfGuests;

}
