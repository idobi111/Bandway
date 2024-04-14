
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "base_price",
    "price",
    "base_currency",
    "fee_breakdown",
    "drive_away_price",
    "drive_away_price_before",
    "base_deposit",
    "drive_away_price_is_approx",
    "deposit",
    "currency",
    "quote_allowed",
    "discount",
    "pay_when"
})

public class PricingInfo implements Serializable
{

    @JsonProperty("base_price")
    public Float basePrice;
    @JsonProperty("price")
    public Float price;
    @JsonProperty("base_currency")
    public String baseCurrency;
    @JsonProperty("fee_breakdown")
    public FeeBreakdown feeBreakdown;
    @JsonProperty("drive_away_price")
    public Float driveAwayPrice;
    @JsonProperty("drive_away_price_before")
    public Object driveAwayPriceBefore;
    @JsonProperty("base_deposit")
    public Float baseDeposit;
    @JsonProperty("drive_away_price_is_approx")
    public Boolean driveAwayPriceIsApprox;
    @JsonProperty("deposit")
    public Float deposit;
    @JsonProperty("currency")
    public String currency;
    @JsonProperty("quote_allowed")
    public Integer quoteAllowed;
    @JsonProperty("discount")
    public Integer discount;
    @JsonProperty("pay_when")
    public String payWhen;
    private final static long serialVersionUID = -2189134644326505289L;

}
