
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "fee",
    "currency",
    "tax",
    "type"
})

public class FeeInfo implements Serializable
{

    @JsonProperty("fee")
    public Integer fee;
    @JsonProperty("currency")
    public String currency;
    @JsonProperty("tax")
    public Integer tax;
    @JsonProperty("type")
    public String type;
    private final static long serialVersionUID = -2856136325868148482L;

}
