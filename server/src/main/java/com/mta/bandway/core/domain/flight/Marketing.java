package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class Marketing implements Serializable {

    @JsonProperty("logoUrl")
    private String logoUrl;
    @JsonProperty("name")
    private String name;

}
