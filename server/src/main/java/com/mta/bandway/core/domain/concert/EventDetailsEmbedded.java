package com.mta.bandway.core.domain.concert;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.util.List;

@Getter
public class EventDetailsEmbedded {
    @JsonProperty("attractions")
    private List<EventAttractions> attractions;

}
