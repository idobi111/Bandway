package com.mta.bandway.core.domain.hotel;

@lombok.Data
public class HotelResponse {
    public boolean status;
    public Object message;
    public long timestamp;
    public Data data;
}
