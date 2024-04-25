package com.mta.bandway.api.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
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
public class ConcertResponseDto {

    @Schema(description = "Concert ID")
    @JsonProperty("id")
    private String id;

    @Schema(description = "Performer's name")
    @JsonProperty("performer")
    private String performer;

    @Schema(description = "Date of the concert in 'yyyy-MM-dd' format")
    @JsonProperty("date")
    private String date;

    @Schema(description = "Venue of the concert")
    @JsonProperty("venue")
    private String venue; // Event place

    @Schema(description = "City where the concert is held")
    @JsonProperty("city")
    private String city;

    @Schema(description = "Country where the concert is held")
    @JsonProperty("country")
    private String country;

    @Schema(description = "URL to purchase tickets for the concert")
    @JsonProperty("ticketUrl")
    private String ticketUrl;

    @Schema(description = "List of image URLs related to the concert")
    @JsonProperty("images")
    private List<String> images;

}
