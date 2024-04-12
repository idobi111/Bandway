
package com.mta.bandway.core.domain.flight;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "id",
    "logoUrl",
    "name"
})
public class Operating {

    @JsonProperty("id")
    public Integer id;
    @JsonProperty("logoUrl")
    public String logoUrl;
    @JsonProperty("name")
    public String name;

    public Operating withId(Integer id) {
        this.id = id;
        return this;
    }

    public Operating withLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
        return this;
    }

    public Operating withName(String name) {
        this.name = name;
        return this;
    }

}
