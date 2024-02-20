package com.mta.bandway.core.domain.hotel;

import lombok.Data;

import java.util.ArrayList;

@Data
public class PriceBreakdown {
    private ArrayList<Object> benefitBadges;
    private GrossPrice grossPrice;
    private ArrayList<Object> taxExceptions;
    private StrikethroughPrice strikethroughPrice;
}