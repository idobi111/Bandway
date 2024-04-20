package com.mta.bandway.core.domain.flight;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class SessionFlightDetails {
    private List<FlightDetails> flightDetails;
    private List<Marketing> marketing;
    private Double price;
    private String duration;
    private String token;

}
