package com.mta.bandway.core.domain.hotel;


import lombok.Data;

import java.util.ArrayList;
@Data
public class Property{
    public String reviewScoreWord;
    public int accuratePropertyClass;
    public int reviewCount;
    public int ufi;
    public boolean isPreferred;
    public boolean isFirstPage;
    public Checkin checkin;
    public int qualityClass;
    public int rankingPosition;
    public double reviewScore;
    public String countryCode;
    public int propertyClass;
    public ArrayList<String> photoUrls;
    public String checkoutDate;
    public int position;
    public double latitude;
    public Checkout checkout;
    public PriceBreakdown priceBreakdown;
    public int optOutFromGalleryChanges;
    public String wishlistName;
    public ArrayList<String> blockIds;
    public String currency;
    public String checkinDate;
    public int id;
    public int mainPhotoId;
    public String name;
    public double longitude;
    public boolean isPreferredPlus;
}
