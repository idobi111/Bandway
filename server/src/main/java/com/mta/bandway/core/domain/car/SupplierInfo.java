package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class SupplierInfo implements Serializable {

    @JsonProperty("logo_url")
    private String logoUrl;
    @JsonProperty("name")
    private String name;


}
