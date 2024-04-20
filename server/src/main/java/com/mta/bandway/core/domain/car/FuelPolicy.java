
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "type",
    "amount",
    "currency"
})

public class FuelPolicy implements Serializable
{

    @JsonProperty("type")
    public String type;
    @JsonProperty("amount")
    public Integer amount;
    @JsonProperty("currency")
    public String currency;
    private final static long serialVersionUID = 838250006858276133L;

}
