package com.mta.bandway.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "car_rental_order")
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class CarRentalOrder implements java.io.Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private String orderDate;
    private String rentalStartDate;
    private String rentalEndDate;
    private String rentalStartLocation;
    private String rentalEndLocation;
}
