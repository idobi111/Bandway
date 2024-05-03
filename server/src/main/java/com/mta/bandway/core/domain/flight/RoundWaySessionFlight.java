package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
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
public class RoundWaySessionFlight {

    @Schema(description = "Details of departing flights")
    @JsonProperty("departFlightDetails")
    private List<SessionFlightDetails> departFlightDetails;


    @Schema(description = "Details of arrive flights")
    @JsonProperty("arriveFlightDetails")
    private List<SessionFlightDetails> arriveFlightDetails;
}
