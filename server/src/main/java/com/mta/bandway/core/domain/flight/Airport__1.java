package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.io.Serializable;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "id",
        "name"
})
public class Airport__1 implements Serializable {

    @JsonProperty("id")
    public String id;
    @JsonProperty("name")
    public String name;

}
