package com.mta.bandway.core.domain.flight;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FlightDetails {
    private String id;
    private String flightNumber;
    private String departureTime;
    private String arrivalTime;
    private String departureAirport;
    private String departureCityName;
    private String arrivalAirport;
    private String arrivalCityName;
    private String duration;
    private String airline;
}
