package com.mta.bandway.core.domain.concert;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class ExternalUrl {

    @JsonProperty("url")
    private String url;

}
