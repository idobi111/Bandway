package com.mta.bandway.core.domain.hotel;

import lombok.Data;

import java.util.ArrayList;
@Data
public class PriceBreakdown {
    public ArrayList<Object> benefitBadges;
    public GrossPrice grossPrice;
    public ArrayList<Object> taxExceptions;
    public StrikethroughPrice strikethroughPrice;
}