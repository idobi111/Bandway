package com.mta.bandway.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Concert implements Serializable {
    private String name;
    private String location;
    private String date;
    private String time;
    private String price;
    private String description;
    private String image;

}
