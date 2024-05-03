package com.mta.bandway.core.domain.city;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@Data
@NoArgsConstructor
public class CityResponse {
    private boolean status;
    private ArrayList<Datum> data;

}
