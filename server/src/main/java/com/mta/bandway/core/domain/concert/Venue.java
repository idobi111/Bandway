package com.mta.bandway.core.domain.concert;

import lombok.Data;

import java.util.List;

@Data
public class Venue {
    private String name;
    private String type;
    private String id;
    private boolean test;
    private String url;
    private String locale;
    private List<Image> images;
    private String postalCode;
    private String timezone;
    private City city;
    private State state;
    private Country country;
    private Address address;
    private Location location;
    private List<Market> markets;
    private List<DMA> dmas;
    private String parkingDetail;
    private String accessibleSeatingDetail;
    private Links _links;

}
