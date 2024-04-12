package com.mta.bandway.api.domain.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
@Builder
public class FlightRequestDto implements Serializable {
    @JsonProperty(value = "srcAirport", required = true)
    private String srcAirport;
    @JsonProperty("destAirport")
    private String destAirport;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date departureDate;
    @JsonProperty("returnDate")
    private String returnDate;
    @JsonProperty(value = "adults", defaultValue = "1")
    private Integer adults;
    @JsonProperty(value = "children", defaultValue = "0")
    private Integer children;
    @JsonProperty(value = "infants", defaultValue = "0")
    private Integer infants;
    @JsonProperty(value = "isRoundTrip", required = true)
    private Boolean isRoundTrip;
    @JsonProperty("isDirectFlight")
    private Boolean isDirectFlight;
    @JsonProperty("isTwoOrMore")
    private Boolean isOneWay;
    @JsonProperty(value = "cabinClass", defaultValue = "economy")
    private String cabinClass;
}
