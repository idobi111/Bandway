
package com.mta.bandway.core.domain.flight;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "token",
    "context",
    "itineraries",
    "messages",
    "filterStats",
    "flightsSessionId",
    "destinationImageUrl"
})
public class Data implements Serializable
{

    @JsonProperty("token")
    public String token;
    @JsonProperty("context")
    public Context context;
    @JsonProperty("itineraries")
    public List<Itinerary> itineraries;
    @JsonProperty("messages")
    public List<Object> messages;
    @JsonProperty("filterStats")
    public FilterStats filterStats;
    @JsonProperty("flightsSessionId")
    public String flightsSessionId;
    @JsonProperty("destinationImageUrl")
    public String destinationImageUrl;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();
    private final static long serialVersionUID = 8362111309140480212L;

    public Data withToken(String token) {
        this.token = token;
        return this;
    }

    public Data withContext(Context context) {
        this.context = context;
        return this;
    }

    public Data withItineraries(List<Itinerary> itineraries) {
        this.itineraries = itineraries;
        return this;
    }

    public Data withMessages(List<Object> messages) {
        this.messages = messages;
        return this;
    }

    public Data withFilterStats(FilterStats filterStats) {
        this.filterStats = filterStats;
        return this;
    }

    public Data withFlightsSessionId(String flightsSessionId) {
        this.flightsSessionId = flightsSessionId;
        return this;
    }

    public Data withDestinationImageUrl(String destinationImageUrl) {
        this.destinationImageUrl = destinationImageUrl;
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

    public Data withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

}
