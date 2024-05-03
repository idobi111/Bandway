package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class SearchResult implements Serializable {

    @JsonProperty("pricing_info")
    private PricingInfo pricingInfo;
    @JsonProperty("route_info")
    private RouteInfo routeInfo;
    @JsonProperty("rating_info")
    private RatingInfo ratingInfo;
    @JsonProperty("supplier_info")
    private SupplierInfo supplierInfo;
    @JsonProperty("forward_url")
    private String forwardUrl;
    @JsonProperty("vehicle_info")
    private VehicleInfo vehicleInfo;

}
