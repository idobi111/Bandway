package com.mta.bandway.api.domain.request;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class ConcertDetailsDto implements java.io.Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private String concertDate;
    private String concertAddress;
    private String concertArtist;
}
