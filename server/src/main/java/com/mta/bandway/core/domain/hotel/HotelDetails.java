package com.mta.bandway.core.domain.hotel;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class HotelDetails {

    @JsonProperty("status")
    private Boolean status;
    @JsonProperty("data")
    private HotelDetailsData data;
}
