package com.mta.bandway.core.domain.concert;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.util.List;

@Getter
public class EventDetailsData {

    @JsonProperty("events")
    private List<EventDetailsExtendData> events;

}
