
package com.mta.bandway.core.domain.car;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "provider",
    "filter",
    "sort",
    "count",
    "meta",
    "is_genius_location",
    "type",
    "search_results",
    "discount_banner",
    "search_key",
    "title",
    "content"
})

public class CarData implements Serializable
{

    @JsonProperty("provider")
    public String provider;
    @JsonProperty("filter")
    public List<Filter> filter;
    @JsonProperty("sort")
    public List<Sort> sort;
    @JsonProperty("count")
    public Integer count;
    @JsonProperty("meta")
    public Meta meta;
    @JsonProperty("is_genius_location")
    public Boolean isGeniusLocation;
    @JsonProperty("type")
    public String type;
    @JsonProperty("search_results")
    public List<SearchResult> searchResults;
    @JsonProperty("discount_banner")
    public Object discountBanner;
    @JsonProperty("search_key")
    public String searchKey;
    @JsonProperty("title")
    public String title;
    @JsonProperty("content")
    public Content__1 content;
    private final static long serialVersionUID = 3343433554523883958L;

}
