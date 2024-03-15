package com.mta.bandway.core.domain.concert;

import lombok.Data;

import java.util.List;

@Data
public class Links {
    private Link self;
    private List<Link> attractions;
    private List<Link> venues;
}
