package com.mta.bandway.core.domain.car;

import java.util.HashMap;
import java.util.Map;

public class Groups {

    private final Map<String, CarMetadata> groups = new HashMap<>();

    public Map<String, CarMetadata> getGroups() {
        return groups;
    }
}
