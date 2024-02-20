package com.mta.bandway.core.domain.hotel;

@lombok.Data
public class HotelResponse {
    private boolean status;
    private Object message;
    private long timestamp;
    private Data data;
}
