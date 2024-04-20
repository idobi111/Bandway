
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "name",
    "id"
})

public class Category implements Serializable
{

    @JsonProperty("name")
    public String name;
    @JsonProperty("id")
    public String id;
    private final static long serialVersionUID = -5998176311626599551L;

}
