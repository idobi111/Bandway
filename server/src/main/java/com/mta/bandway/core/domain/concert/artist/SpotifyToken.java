package com.mta.bandway.core.domain.concert.artist;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class SpotifyToken {
    @JsonProperty("access_token")
    private String accessToken;
}
