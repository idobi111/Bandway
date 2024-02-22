package com.mta.bandway.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "hotel_order")
@JsonIgnoreProperties({"hibernateLazyInitializer"})
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

}
