package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class CarData implements Serializable {

    @JsonProperty("provider")
    private String provider;
    @JsonProperty("filter")
    private List<Filter> filter;
    @JsonProperty("sort")
    private List<Sort> sort;
    @JsonProperty("count")
    private Integer count;
    @JsonProperty("meta")
    private Meta meta;
    @JsonProperty("is_genius_location")
    private Boolean isGeniusLocation;
    @JsonProperty("type")
    private String type;
    @JsonProperty("search_results")
    private List<SearchResult> searchResults;
    @JsonProperty("discount_banner")
    private Object discountBanner;
    @JsonProperty("search_key")
    private String searchKey;
    @JsonProperty("title")
    private String title;
    @JsonProperty("content")
    private Content__1 content;

}
