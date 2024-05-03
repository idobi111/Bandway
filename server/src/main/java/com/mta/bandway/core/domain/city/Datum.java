package com.mta.bandway.core.domain.city;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Datum implements java.io.Serializable {
    @JsonProperty("dest_type")
    private String destType;
    @JsonProperty("dest_id")
    private String destId;

}