
package com.mta.bandway.core.domain.car;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "supplier",
    "badges"
})

public class Content implements Serializable
{

    @JsonProperty("supplier")
    public Supplier supplier;
    @JsonProperty("badges")
    public List<Object> badges;
    private final static long serialVersionUID = -8805775724480216034L;

}
