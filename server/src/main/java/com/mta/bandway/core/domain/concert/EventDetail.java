package com.mta.bandway.core.domain.concert;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class EventDetail {
    private String name;
    private String type;
    private String id;
    private boolean test;
    private String url;
    private String locale;
    private List<Image> images;
    private Map<String, Object> sales;
    private EventDate dates;
    private List<Object> classifications;
    private Promoter promoter;
    private List<Promoter> promoters;
    private List<PriceRange> priceRanges;
    private Seatmap seatmap;
    private Links _links;
    private VenueEmbedded _embedded;

}