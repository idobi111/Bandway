package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class Datum implements Serializable {

    @JsonProperty("id")
    private String id;
    @JsonProperty("presentation")
    private Presentation presentation;
}
