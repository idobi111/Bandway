package com.mta.bandway.core.domain.hotel;


import lombok.Data;

import java.util.ArrayList;

@Data
public class Property {
    private String reviewScoreWord;
    private int accuratePropertyClass;
    private int reviewCount;
    private int ufi;
    private boolean isPreferred;
    private boolean isFirstPage;
    private Checkin checkin;
    private int qualityClass;
    private int rankingPosition;
    private double reviewScore;
    private String countryCode;
    private int propertyClass;
    private ArrayList<String> photoUrls;
    private String checkoutDate;
    private int position;
    private double latitude;
    private Checkout checkout;
    private PriceBreakdown priceBreakdown;
    private int optOutFromGalleryChanges;
    private String wishlistName;
    private ArrayList<String> blockIds;
    private String currency;
    private String checkinDate;
    private int id;
    private int mainPhotoId;
    private String name;
    private double longitude;
    private boolean isPreferredPlus;
}
