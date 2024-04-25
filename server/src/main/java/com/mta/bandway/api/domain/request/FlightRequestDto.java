package com.mta.bandway.api.domain.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import org.springframework.lang.Nullable;

import java.io.Serializable;
import java.util.Date;

@Data
@Builder
public class FlightRequestDto implements Serializable {

    @Schema(description = "Source airport code", example = "(tel aviv): eyJzIjoiVExWIiwiZSI6Ijk1NjczNjM1IiwiaCI6IjI3NTQ2Mjk2In0=")
    @JsonProperty(value = "src", required = true)
    private String src;

    @Schema(description = "Destination airport code", example = "(london): eyJzIjoiTE9ORCIsImUiOiIyNzU0NDAwOCIsImgiOiIyNzU0NDAwOCJ9")
    @JsonProperty(value = "dest", required = true)
    private String dest;

    @Schema(description = "Departure date", example = "2024-04-25")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date departureDate;

    @Schema(description = "Return date", example = "2024-04-27")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Nullable
    private Date returnDate;

    @Schema(description = "Number of adults", example = "1", defaultValue = "1")
    @JsonProperty(value = "adults", defaultValue = "1")
    private Integer adults;

    @Schema(description = "Number of children", example = "0", defaultValue = "0")
    @JsonProperty(value = "children", defaultValue = "0")
    private Integer children;

    @Schema(description = "Number of infants", example = "0", defaultValue = "0")
    @JsonProperty(value = "infants", defaultValue = "0")
    private Integer infants;

    @Schema(description = "Is it a round trip", example = "true")
    @JsonProperty(value = "isRoundTrip", required = true)
    private Boolean isRoundTrip;

    @Schema(description = "Is it a multi-city trip", example = "false")
    @JsonProperty(value = "isMultiCityTrip", required = true)
    private Boolean isMultiCityTrip;

    @Schema(description = "Is it a direct flight", example = "true")
    @JsonProperty("isDirectFlight")
    private Boolean isDirectFlight;

    @Schema(description = "Is it a one-way trip", example = "false")
    @JsonProperty("isOneWay")
    private Boolean isOneWay;

    @Schema(description = "Cabin class", example = "economy", defaultValue = "economy")
    @JsonProperty(value = "cabinClass", defaultValue = "economy")
    private String cabinClass;

}