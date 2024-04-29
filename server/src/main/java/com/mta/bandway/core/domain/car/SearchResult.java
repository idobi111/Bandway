package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class SearchResult implements Serializable {

    @JsonProperty("pricing_info")
    private PricingInfo pricingInfo;
    @JsonProperty("applied_discount_types")
    private List<Object> appliedDiscountTypes;
    @JsonProperty("freebies")
    private List<Object> freebies;
    @JsonProperty("route_info")
    private RouteInfo routeInfo;
    @JsonProperty("rating_info")
    private RatingInfo ratingInfo;
    @JsonProperty("content")
    private Content content;
    @JsonProperty("pay_when_text")
    private String payWhenText;
    @JsonProperty("fee_info")
    private FeeInfo feeInfo;
    @JsonProperty("accessibility")
    private Accessibility accessibility;
    @JsonProperty("supplier_info")
    private SupplierInfo supplierInfo;
    @JsonProperty("forward_url")
    private String forwardUrl;
    @JsonProperty("vehicle_info")
    private VehicleInfo vehicleInfo;

}
