package com.mta.bandway.core.domain.flight;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class SessionFlightDetails {
    private String sourceCountry;
    private String sourceCity;
    private String destCountry;
    private String destCity;
    private List<FlightDetails> flightDetails;
    private List<Marketing> marketing;
    private Double price;
    private String duration;
    private Integer stopCount;

}
