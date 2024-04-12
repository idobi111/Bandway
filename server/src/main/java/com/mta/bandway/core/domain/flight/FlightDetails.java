package com.mta.bandway.core.domain.flight;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FlightDetails {
    private String flightNumber;
    private String departureTime;
    private String arrivalTime;
    private String departureAirport;
    private String arrivalAirport;
    private String duration;
    private String airline;
    private String price;
}
