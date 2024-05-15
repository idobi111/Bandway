package com.mta.bandway.core.domain.concert;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class EventAttractions {
    @JsonProperty("externalLinks")
    private ExternalLinks externalLinks;
}
