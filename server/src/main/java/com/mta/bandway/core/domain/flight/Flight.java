package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class Flight implements Serializable {

    @JsonProperty("fromId")
    private String fromId;
    @JsonProperty("toId")
    private String toId;
    @JsonProperty("departDate")
    private String departDate;

}