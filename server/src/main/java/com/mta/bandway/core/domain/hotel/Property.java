package com.mta.bandway.core.domain.hotel;


import lombok.Data;

import java.util.ArrayList;

@Data
public class Property {
    private double reviewScore;
    private ArrayList<String> photoUrls;
    private PriceBreakdown priceBreakdown;
    private String wishlistName;
    private int id;
    private String name;
}
