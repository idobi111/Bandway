
package com.mta.bandway.core.domain.car;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "categories",
    "layout",
    "title",
    "id",
    "type"
})

public class Filter implements Serializable
{

    @JsonProperty("categories")
    public List<Category> categories;
    @JsonProperty("layout")
    public Layout layout;
    @JsonProperty("title")
    public String title;
    @JsonProperty("id")
    public String id;
    @JsonProperty("type")
    public String type;
    private final static long serialVersionUID = 1853688242425054879L;

}
