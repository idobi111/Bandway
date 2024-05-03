package com.mta.bandway.core.domain.concert;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
@Data
public class Event {
    @JsonProperty("_embedded")
    private Embedded embedded;

}


