package com.mta.bandway.core.domain.hotel;

import lombok.Data;

import java.util.ArrayList;
@Data
public class Props {
    public boolean fill;
    public Content content;
    public String title;
    public String text;
    public boolean fitContentWidth;
    public ArrayList<Item> items;
    public Component component;
    public String spacing;
    public String accessibilityLabel;
    public String icon;
    public String tertiaryTintedColor;
    public String variant;
    public String url;
}