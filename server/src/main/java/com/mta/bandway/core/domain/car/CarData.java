package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class CarData implements Serializable {
    @JsonProperty("search_results")
    private List<SearchResult> searchResults;
}
