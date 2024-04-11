
package com.mta.bandway.core.domain.flight;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "status",
    "sessionId",
    "totalResults"
})
public class Context implements Serializable
{

    @JsonProperty("status")
    public String status;
    @JsonProperty("sessionId")
    public String sessionId;
    @JsonProperty("totalResults")
    public Integer totalResults;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = 4462228382676208149L;

    public Context withStatus(String status) {
        this.status = status;
        return this;
    }

    public Context withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }

    public Context withTotalResults(Integer totalResults) {
        this.totalResults = totalResults;
        return this;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

    public Context withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
