package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
@Builder
public class MultiCityFlight implements Serializable {

    @JsonProperty("market")
    private String market;
    @JsonProperty("locale")
    private String locale;
    @JsonProperty(value = "currency", defaultValue = "USD")
    private String currency;
    @JsonProperty(value = "adults", defaultValue = "1")
    private Integer adults;
    @JsonProperty(value = "children", defaultValue = "0")
    private Integer children;
    @JsonProperty(value = "infants", defaultValue = "0")
    private Integer infants;
    @JsonProperty("cabinClass")
    private String cabinClass;
    @JsonProperty("flights")
    private List<Flight> flights;

}
