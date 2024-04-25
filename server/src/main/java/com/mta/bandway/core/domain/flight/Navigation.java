package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class Navigation implements Serializable {
    @JsonProperty("entityType")
    private String entityType;
}
