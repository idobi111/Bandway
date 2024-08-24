package com.mta.bandway.core.domain.car;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class DealInfo {
    private String carLinks;
    private String supplierLogos;
    private String supplierNames;
    private Double price;
}
