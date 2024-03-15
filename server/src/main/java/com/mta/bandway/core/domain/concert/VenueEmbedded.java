package com.mta.bandway.core.domain.concert;

import lombok.Data;

import java.util.List;

@Data
public class VenueEmbedded {
    private List<Venue> venues;
}