package com.mta.bandway.core.domain.car;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class CarAggregatedInfo {
    private List<DealInfo> dealInfos;
}
