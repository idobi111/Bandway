package com.mta.bandway.api.domain.request;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class PackageSearchOrderDto implements java.io.Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private String orderDate;
    private String checkInDate;
    private String checkOutDate;
    private int roomCount;
    private int adults;
    private int children;
    private int minPrice;
    private int maxPrice;
    private String fromCity;
    private String toCity;
    private String fromCountry;
    private String toCountry;
}
