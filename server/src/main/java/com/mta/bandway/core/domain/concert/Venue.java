package com.mta.bandway.core.domain.concert;

import lombok.Data;

@Data
public class Venue {
    private String name;
    private City city;
    private Country country;
}
