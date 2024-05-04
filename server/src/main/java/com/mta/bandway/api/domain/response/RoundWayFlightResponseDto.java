package com.mta.bandway.api.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mta.bandway.core.domain.flight.RoundWaySessionFlight;
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
public class RoundWayFlightResponseDto {

    @Schema(description = "Details of round way flights")
    @JsonProperty("roundWayFlightDetails")
    private List<RoundWaySessionFlight> roundWayFlightDetails;
    @Schema(description = "Token for the session")
    @JsonProperty("token")
    private String token;
    @Schema(description = "Minimum price of the round way flight")
    @JsonProperty("minPrice")
    private Double minPrice;

}
