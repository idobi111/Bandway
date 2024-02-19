package com.mta.bandway.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Hotel  implements Serializable {
    private String name;
    private String location;
    private String checkIn;
    private String checkOut;
    private String time;
    private String price;
    private String description;
}
