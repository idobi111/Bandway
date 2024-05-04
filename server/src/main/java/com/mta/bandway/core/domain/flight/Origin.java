package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class Origin implements Serializable {

    @JsonProperty("displayCode")
    private String displayCode;
    @JsonProperty("parent")
    private Parent parent;

}
