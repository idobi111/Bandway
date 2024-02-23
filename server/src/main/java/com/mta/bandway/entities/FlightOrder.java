package com.mta.bandway.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "flight_order")
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class FlightOrder implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private String orderDate;
    private String flightDate;
    private String flightFrom;
    private String flightTo;
    private String flightNumber;
}
