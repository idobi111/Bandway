package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "status",
        "message",
        "data"
})
@Data
@AllArgsConstructor
public class AutoCompleteCity implements Serializable {

    private final static long serialVersionUID = -7482660801563173884L;
    @JsonProperty("status")
    public Boolean status;
    @JsonProperty("message")
    public String message;
    @JsonProperty("data")
    public List<Datum> data;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();

}
