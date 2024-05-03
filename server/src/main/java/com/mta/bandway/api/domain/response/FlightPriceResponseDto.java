package com.mta.bandway.api.domain.response;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class FlightPriceResponseDto {
    private Double price;
    private String agencyName;
    private String url;

}
