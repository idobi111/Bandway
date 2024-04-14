
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "dsaBanner",
    "discountBanner"
})

public class Content__1 implements Serializable
{

    @JsonProperty("dsaBanner")
    public Object dsaBanner;
    @JsonProperty("discountBanner")
    public Object discountBanner;
    private final static long serialVersionUID = -1350118335974471390L;

}
