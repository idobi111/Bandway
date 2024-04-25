package com.mta.bandway.core.domain.concert.artist;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ExternalUrls {

    @JsonProperty("spotify")
    private String spotify;

}
