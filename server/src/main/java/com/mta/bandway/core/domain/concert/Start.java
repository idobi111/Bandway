package com.mta.bandway.core.domain.concert;

import lombok.Data;

@Data
public class Start {
    private String localDate;
    private String localTime;
    private String dateTime;
    private boolean dateTBD;
    private boolean dateTBA;
    private boolean timeTBA;
    private boolean noSpecificTime;
}
