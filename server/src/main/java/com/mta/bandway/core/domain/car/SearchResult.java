
package com.mta.bandway.core.domain.car;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "pricing_info",
    "applied_discount_types",
    "freebies",
    "route_info",
    "rating_info",
    "content",
    "pay_when_text",
    "fee_info",
    "accessibility",
    "supplier_info",
    "forward_url",
    "vehicle_info"
})

public class SearchResult implements Serializable
{

    @JsonProperty("pricing_info")
    public PricingInfo pricingInfo;
    @JsonProperty("applied_discount_types")
    public List<Object> appliedDiscountTypes;
    @JsonProperty("freebies")
    public List<Object> freebies;
    @JsonProperty("route_info")
    public RouteInfo routeInfo;
    @JsonProperty("rating_info")
    public RatingInfo ratingInfo;
    @JsonProperty("content")
    public Content content;
    @JsonProperty("pay_when_text")
    public String payWhenText;
    @JsonProperty("fee_info")
    public FeeInfo feeInfo;
    @JsonProperty("accessibility")
    public Accessibility accessibility;
    @JsonProperty("supplier_info")
    public SupplierInfo supplierInfo;
    @JsonProperty("forward_url")
    public String forwardUrl;
    @JsonProperty("vehicle_info")
    public VehicleInfo vehicleInfo;
    private final static long serialVersionUID = 5173601047851557795L;

}
