package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class Marketing implements Serializable {

    @JsonProperty("id")
    public Integer id;
    @JsonProperty("logoUrl")
    public String logoUrl;
    @JsonProperty("name")
    public String name;

}
