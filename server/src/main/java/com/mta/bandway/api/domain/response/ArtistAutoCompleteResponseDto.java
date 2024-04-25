package com.mta.bandway.api.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mta.bandway.core.domain.concert.artist.Image;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ArtistAutoCompleteResponseDto {
    @JsonProperty("artist_name")
    private String artistName;
    @JsonProperty("artist_id")
    private String artistId;
    @JsonProperty("spotify_link")
    private String spotifyLink;
    @JsonProperty("genres")
    private List<String> genres;
    @JsonProperty("images")
    private List<Image> images;
    @JsonProperty("popularity")
    private Integer popularity;
}
