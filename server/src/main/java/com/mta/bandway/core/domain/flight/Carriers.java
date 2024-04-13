package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class Carriers implements Serializable {

    @JsonProperty("marketing")
    private List<Marketing> marketing;
    @JsonProperty("operationType")
    private String operationType;

}
