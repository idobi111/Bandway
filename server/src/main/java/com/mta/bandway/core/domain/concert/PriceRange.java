package com.mta.bandway.core.domain.concert;

import lombok.Data;

@Data
public class PriceRange {
    private String type;
    private String currency;
    private double min;
    private double max;
}
