
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "response_code"
})

public class Meta implements Serializable
{

    @JsonProperty("response_code")
    public Integer responseCode;
    private final static long serialVersionUID = -21713000968213617L;

}
