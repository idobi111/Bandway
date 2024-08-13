package com.mta.bandway.core.domain.car.auto.correct;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CarDatum {

    @JsonProperty("hierarchy")
    private String hierarchy;
    @JsonProperty("location")
    private String location;
    @JsonProperty("entity_name")
    private String entityName;
    @JsonProperty("entity_id")
    private String entityId;
    @JsonProperty("class")
    private String type;


}
