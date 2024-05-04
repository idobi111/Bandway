package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;


@Data
public class OriginOrder implements Serializable {

    @JsonProperty("city")
    public String city;
    @JsonProperty("country")
    public String country;

}
