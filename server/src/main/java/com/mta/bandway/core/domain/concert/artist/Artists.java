package com.mta.bandway.core.domain.concert.artist;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class Artists {
    @JsonProperty("items")
    private List<Item> items;
    @JsonProperty("total")
    private Integer total;

}
