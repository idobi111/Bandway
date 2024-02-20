package com.mta.bandway.core.domain.hotel;

import lombok.Data;

import java.util.ArrayList;

@Data
public class Text {
    private String text;
    private String font;
    private String color;
    private ArrayList<LinkAction> linkActions;
}
