
package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.Valid;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "status",
    "message",
    "data"
})
public class OneWayFlight {

    @JsonProperty("status")
    public Boolean status;
    @JsonProperty("message")
    public String message;
    @JsonProperty("data")
    @Valid
    public FlightData data;

    public OneWayFlight withStatus(Boolean status) {
        this.status = status;
        return this;
    }

    public OneWayFlight withMessage(String message) {
        this.message = message;
        return this;
    }

    public OneWayFlight withData(FlightData data) {
        this.data = data;
        return this;
    }

}
