package com.mta.bandway.api.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AutoCompleteCityResponseDto {
    @Schema(description = "Location ID")
    @JsonProperty("id")
    private String id;

    @Schema(description = "Location name")
    @JsonProperty("name")
    private String name;

    @Schema(description = "Country where the location is")
    @JsonProperty("country")
    private String country;

    @Schema(description = "Type of entity (e.g., city, town)")
    @JsonProperty("entitytype")
    private String entityType;
}
