package com.mta.bandway.api.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mta.bandway.core.domain.flight.OneWaySessionFlight;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OneWayFlightResponseDto {

    @Schema(description = "Details of departing flights")
    @JsonProperty("departFlightDetails")
    private List<OneWaySessionFlight> departFlightDetails;
    @Schema(description = "Token for the session")
    @JsonProperty("token")
    private String token;
    @Schema(description = "Minimum price of the round way flight")
    @JsonProperty("minPrice")
    private Double minPrice;
}
