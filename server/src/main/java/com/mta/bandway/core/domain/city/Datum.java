package com.mta.bandway.core.domain.city;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Datum implements java.io.Serializable {
    @JsonProperty("dest_type")
    private String destType;
    @JsonProperty("city_name")
    private String cityName;
    @JsonProperty("label")
    private String label;
    @JsonProperty("longitude")
    private double longitude;
    @JsonProperty("latitude")
    private double latitude;
    @JsonProperty("region")
    private String region;
    @JsonProperty("city_ufi")
    private int cityUfi;
    @JsonProperty("name")
    private String name;
    @JsonProperty("roundtrip")
    private String roundTrip;
    @JsonProperty("country")
    private String country;
    @JsonProperty("image_url")
    private String imageUrl;
    @JsonProperty("dest_id")
    private String destId;
    @JsonProperty("hotels")
    private int hotels;
}