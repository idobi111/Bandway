
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "name",
    "city",
    "latitude",
    "country_code",
    "longitude",
    "location_type",
    "location_id",
    "icon",
    "address",
    "country"
})

public class Dropoff implements Serializable
{

    @JsonProperty("name")
    public String name;
    @JsonProperty("city")
    public String city;
    @JsonProperty("latitude")
    public String latitude;
    @JsonProperty("country_code")
    public String countryCode;
    @JsonProperty("longitude")
    public String longitude;
    @JsonProperty("location_type")
    public String locationType;
    @JsonProperty("location_id")
    public String locationId;
    @JsonProperty("icon")
    public String icon;
    @JsonProperty("address")
    public String address;
    @JsonProperty("country")
    public String country;
    private final static long serialVersionUID = 4448519501780151533L;

}
