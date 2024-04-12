package com.mta.bandway.api.domain.response;

import com.mta.bandway.core.domain.flight.FlightDetails;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FlightResponseDto {
    private Boolean isSingleWay;
    private FlightDetails srcFlightDetails;
    private FlightDetails destFlightDetails;
}
