package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
public class AutoCompleteCity implements Serializable {

    @JsonProperty("status")
    private Boolean status;
    @JsonProperty("data")
    private List<Datum> data;

}
