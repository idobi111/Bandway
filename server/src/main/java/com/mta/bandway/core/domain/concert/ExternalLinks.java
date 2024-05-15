package com.mta.bandway.core.domain.concert;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.util.List;

@Getter
public class ExternalLinks {

    @JsonProperty("youtube")
    private List<ExternalUrl> youtube;
    @JsonProperty("twitter")
    private List<ExternalUrl> twitter;
    @JsonProperty("itunes")
    private List<ExternalUrl> itunes;
    @JsonProperty("wiki")
    private List<ExternalUrl> wiki;
    @JsonProperty("facebook")
    private List<ExternalUrl> facebook;
    @JsonProperty("spotify")
    private List<ExternalUrl> spotify;
    @JsonProperty("musicbrainz")
    private List<ExternalUrl> musicbrainz;
    @JsonProperty("instagram")
    private List<ExternalUrl> instagram;
    @JsonProperty("homepage")
    private List<ExternalUrl> homepage;

}
