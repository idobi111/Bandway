
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "location_type",
    "longitude",
    "country_code",
    "address",
    "country",
    "icon",
    "location_id",
    "name",
    "latitude",
    "city"
})

public class Pickup implements Serializable
{

    @JsonProperty("location_type")
    public String locationType;
    @JsonProperty("longitude")
    public String longitude;
    @JsonProperty("country_code")
    public String countryCode;
    @JsonProperty("address")
    public String address;
    @JsonProperty("country")
    public String country;
    @JsonProperty("icon")
    public String icon;
    @JsonProperty("location_id")
    public String locationId;
    @JsonProperty("name")
    public String name;
    @JsonProperty("latitude")
    public String latitude;
    @JsonProperty("city")
    public String city;
    private final static long serialVersionUID = 511770392903563098L;

}
