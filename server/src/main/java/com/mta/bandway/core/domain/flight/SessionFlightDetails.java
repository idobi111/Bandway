package com.mta.bandway.core.domain.flight;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class SessionFlightDetails {
    List<FlightDetails> flightDetails;
    List<String> flightLogo;
}
