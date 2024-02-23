package com.mta.bandway.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "package_order")
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class PackageOrder implements java.io.Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private String orderDate;
    private Integer concertId;
    @OneToOne
    private FlightOrder flightOrderId;
    @OneToOne
    private HotelOrder hotelOrderId;
    @OneToOne
    private CarRentalOrder carRentalOrderId;
}
