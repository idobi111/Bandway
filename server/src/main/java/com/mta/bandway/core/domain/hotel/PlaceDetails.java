
package com.mta.bandway.core.domain.hotel;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class PlaceDetails {

    @JsonProperty("formatted_address")
    private String formattedAddress;
}
