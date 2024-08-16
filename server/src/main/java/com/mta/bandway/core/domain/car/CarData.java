package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class CarData {

    @JsonProperty("quotes")
    private List<CarResourceData> carRentalData;
    @JsonProperty("quotes_count")
    private Integer quotesCount;
    @JsonProperty("search_id")
    private String searchId;
    @JsonProperty("groups")
    private Groups groups;

}