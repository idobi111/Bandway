package com.mta.bandway.api.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mta.bandway.core.domain.concert.artist.Image;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class SpotifyLinkResponseDto {
    @Schema(description = "Uri link for spotify", example = "https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C")
    @JsonProperty("spotifyLink")
    private String spotifyLink;
    @Schema(description = "Artist name", example = "Bruno Mars")
    @JsonProperty("artistName")
    private String artistName;
    @Schema(description = "Artist images", example = """
            [
                {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
                  "width": 640
                }]""")
    @JsonProperty("imageList")
    private List<Image> imageList;
}
