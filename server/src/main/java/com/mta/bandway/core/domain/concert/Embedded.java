package com.mta.bandway.core.domain.concert;

import lombok.Data;

import java.util.List;

@Data
public class Embedded {
    private List<EventDetail> events;
}

