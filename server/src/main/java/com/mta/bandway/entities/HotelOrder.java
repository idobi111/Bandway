package com.mta.bandway.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "hotel_order")
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class HotelOrder implements java.io.Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private String orderDate;
    private String checkInDate;
    private String checkOutDate;
    private String hotelName;
    private String hotelAddress;
    private Integer roomCount;
    private Double price;
    private Integer numberOfGuests;

}
