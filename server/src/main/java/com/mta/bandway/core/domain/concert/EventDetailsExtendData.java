package com.mta.bandway.core.domain.concert;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.util.List;

@Getter
public class EventDetailsExtendData {
    @JsonProperty("priceRanges")
    private List<PriceRange> priceRanges;
    @JsonProperty("_embedded")
    private EventDetailsEmbedded embedded;

}
