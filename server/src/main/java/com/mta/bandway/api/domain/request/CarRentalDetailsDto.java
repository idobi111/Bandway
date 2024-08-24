package com.mta.bandway.api.domain.request;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CarRentalDetailsDto implements java.io.Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private String rentalStartDate;
    private String rentalEndDate;
    private String rentalStartLocation;
    private String rentalEndLocation;
}
