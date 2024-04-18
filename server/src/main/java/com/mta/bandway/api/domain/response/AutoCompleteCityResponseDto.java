package com.mta.bandway.api.domain.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AutoCompleteCityResponseDto {
    private String id;
    private String city;
    private String country;
}
