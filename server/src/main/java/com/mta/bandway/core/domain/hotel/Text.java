package com.mta.bandway.core.domain.hotel;

import lombok.Data;

import java.util.ArrayList;

@Data
public class Text {
    public String text;
    public String font;
    public String color;
    public ArrayList<LinkAction> linkActions;
}
