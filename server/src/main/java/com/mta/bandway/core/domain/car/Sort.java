
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "identifier",
    "title_tag",
    "name"
})

public class Sort implements Serializable
{

    @JsonProperty("identifier")
    public String identifier;
    @JsonProperty("title_tag")
    public String titleTag;
    @JsonProperty("name")
    public String name;
    private final static long serialVersionUID = 6674850215633894765L;

}
