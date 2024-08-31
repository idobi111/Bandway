package com.mta.bandway.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Entity
@Table(name = "flight_order")
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FlightOrder implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String userId;
    private String originCity;
    private String destinationCity;
    private String departureDate;
    private String returnDate;
    private Integer passengerCount;
    private Double price;
    private String airline;
    private String orderDate;

}
