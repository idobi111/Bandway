
package com.mta.bandway.core.domain.hotel;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class SearchPlaceLocation {

    @JsonProperty("status")
    private Boolean status;
    @JsonProperty("data")
    private List<PlaceDetails> data;

}
