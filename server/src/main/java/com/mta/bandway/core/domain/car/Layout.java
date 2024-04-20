
package com.mta.bandway.core.domain.car;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "collapsed_count",
    "is_collapsed",
    "is_collapsable",
    "layout_type"
})

public class Layout implements Serializable
{

    @JsonProperty("collapsed_count")
    public Integer collapsedCount;
    @JsonProperty("is_collapsed")
    public String isCollapsed;
    @JsonProperty("is_collapsable")
    public String isCollapsable;
    @JsonProperty("layout_type")
    public String layoutType;
    private final static long serialVersionUID = -8521727940833506014L;

}
