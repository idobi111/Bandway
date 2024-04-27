package com.mta.bandway.core.domain.concert.artist;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class AutoCompleteArtistResponse {

    @JsonProperty("artists")
    private Artists artists;

}
