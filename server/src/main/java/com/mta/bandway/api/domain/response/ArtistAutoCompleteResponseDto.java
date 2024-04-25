package com.mta.bandway.api.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mta.bandway.core.domain.concert.artist.Image;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ArtistAutoCompleteResponseDto {

    @Schema(description = "Artist name")
    @JsonProperty("artistName")
    private String artistName;

    @Schema(description = "Artist ID")
    @JsonProperty("artistId")
    private String artistId;

    @Schema(description = "Link to the artist's Spotify page")
    @JsonProperty("spotifyLink")
    private String spotifyLink;

    @Schema(description = "List of genres associated with the artist")
    @JsonProperty("genres")
    private List<String> genres;

    @Schema(description = "List of images associated with the artist")
    @JsonProperty("images")
    private List<Image> images;

    @Schema(description = "Popularity score of the artist")
    @JsonProperty("popularity")
    private Integer popularity;
}
