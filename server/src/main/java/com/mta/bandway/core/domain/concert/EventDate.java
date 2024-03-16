package com.mta.bandway.core.domain.concert;

import lombok.Data;

@Data
public class EventDate {
    private Start start;
    private String timezone;
    private DateStatus status;
    private boolean spanMultipleDays;

}
