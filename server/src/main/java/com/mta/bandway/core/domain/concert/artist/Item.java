package com.mta.bandway.core.domain.concert.artist;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;


@Data
public class Item {

    @JsonProperty("external_urls")
    private ExternalUrls externalUrls;
    @JsonProperty("genres")
    private List<String> genres;
    @JsonProperty("id")
    private String id;
    @JsonProperty("images")
    private List<Image> images;
    @JsonProperty("name")
    private String name;
    @JsonProperty("popularity")
    private Integer popularity;

}
