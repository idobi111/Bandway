package com.mta.bandway.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Flight  implements Serializable {
    private String flightNumber;
    private String departure;
    private String arrival;
    private String date;
    private String time;
    private String price;
    private String description;
}
