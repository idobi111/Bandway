package com.mta.bandway.api.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mta.bandway.core.domain.flight.SessionFlightDetails;
import lombok.Builder;
import lombok.Data;
import org.springframework.lang.Nullable;

import java.util.List;

@Data
@Builder
public class FlightResponseDto {
    @JsonProperty("isSingleWay")
    private Boolean isSingleWay;
    @JsonProperty("departFlightDetails")
    private List<SessionFlightDetails> departFlightDetails;
    @Nullable
    @JsonProperty("arrivalFlightDetails")
    private List<SessionFlightDetails> arrivalFlightDetails;
}
