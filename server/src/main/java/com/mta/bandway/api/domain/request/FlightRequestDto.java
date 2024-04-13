package com.mta.bandway.api.domain.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import org.springframework.lang.Nullable;

import java.io.Serializable;
import java.util.Date;

@Data
@Builder
public class FlightRequestDto implements Serializable {
    @JsonProperty(value = "src", required = true)
    private String src;
    @JsonProperty(value = "dest", required = true)
    private String dest;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date departureDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Nullable
    private Date returnDate;
    @JsonProperty(value = "adults", defaultValue = "1")
    private Integer adults;
    @JsonProperty(value = "children", defaultValue = "0")
    private Integer children;
    @JsonProperty(value = "infants", defaultValue = "0")
    private Integer infants;
    @JsonProperty(value = "isRoundTrip", required = true)
    private Boolean isRoundTrip;
    @JsonProperty(value = "isMultiCityTrip", required = true)
    private Boolean isMultiCityTrip;
    @JsonProperty("isDirectFlight")
    private Boolean isDirectFlight;
    @JsonProperty("isOneWay")
    private Boolean isOneWay;
    @JsonProperty(value = "cabinClass", defaultValue = "economy")
    private String cabinClass;
}
