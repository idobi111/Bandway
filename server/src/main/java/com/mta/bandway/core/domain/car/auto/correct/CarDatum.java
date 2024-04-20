package com.mta.bandway.core.domain.car.auto.correct;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
public class CarDatum implements Serializable {

    @JsonProperty("name")
    private String name;
    @JsonProperty("city")
    private String city;
    @JsonProperty("iata_code")
    private Object iataCode;
    @JsonProperty("coordinates")
    private Coordinates coordinates;
    @JsonProperty("country")
    private String country;
    @JsonProperty("type")
    private String type;
    @JsonProperty("city_id")
    private Object cityId;
    @JsonProperty("location_id")
    private Object locationId;
    @JsonProperty("id")
    private String id;

}
