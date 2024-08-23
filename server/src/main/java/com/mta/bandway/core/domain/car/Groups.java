package com.mta.bandway.core.domain.car;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;

import java.util.HashMap;
import java.util.Map;

public class Groups {

    private final Map<String, CarMetadata> groups = new HashMap<>();

    @JsonAnyGetter
    public Map<String, CarMetadata> getGroups() {
        return groups;
    }
    @JsonAnySetter
    public void setGroups(String key, CarMetadata value) {
        groups.put(key, value);
    }

}
