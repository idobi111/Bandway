package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class MarketingCarrier implements Serializable {

    @JsonProperty("id")
    private Integer id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("alternateId")
    private String alternateId;
    @JsonProperty("allianceId")
    private Integer allianceId;
    @JsonProperty("displayCode")
    private String displayCode;

}
