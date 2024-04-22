package com.mta.bandway.api.domain.response;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ConcertResponseDto {
    private String id;
    private String performer;
    private String date;
    private String venue; //Event place
    private String city;
    private String country;
    private String ticketUrl;
    private List<String> images;
}
