package com.mta.bandway.api.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mta.bandway.core.domain.flight.SessionFlightDetails;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FlightResponseDto {
    @Schema(description = "Whether it's a single-way flight")
    @JsonProperty("isSingleWay")
    private Boolean isSingleWay;

    @Schema(description = "Details of departing flights")
    @JsonProperty("departFlightDetails")
    private List<SessionFlightDetails> departFlightDetails;

    @Schema(description = "Details of arrival flights")
    @Nullable
    @JsonProperty("arrivalFlightDetails")
    private List<SessionFlightDetails> arrivalFlightDetails;
}
