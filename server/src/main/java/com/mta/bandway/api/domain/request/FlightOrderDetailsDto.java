package com.mta.bandway.api.domain.request;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class FlightOrderDetailsDto implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String userId;
    private String originCity;
    private String destinationCity;
    private String departureDate;
    private String returnDate;
    private Integer passengerCount;
    private Double price;
    private String airline;

}
