package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class Presentation implements Serializable {

    @JsonProperty("title")
    private String title;
    @JsonProperty("suggestionTitle")
    private String suggestionTitle;
    @JsonProperty("subtitle")
    private String subtitle;

}
