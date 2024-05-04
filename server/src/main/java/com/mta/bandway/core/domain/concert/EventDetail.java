package com.mta.bandway.core.domain.concert;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class EventDetail {
    private String name;
    private String id;
    private String url;
    private List<Image> images;
    private EventDate dates;
    @JsonProperty("_embedded")
    private VenueEmbedded embedded;

}