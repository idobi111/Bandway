package com.mta.bandway.core.domain.hotel;

import lombok.Data;

import java.util.ArrayList;
@Data
public class Props {
    private boolean fill;
    private Content content;
    private String title;
    private String text;
    private boolean fitContentWidth;
    private ArrayList<Item> items;
    private Component component;
    private String spacing;
    private String accessibilityLabel;
    private String icon;
    private String tertiaryTintedColor;
    private String variant;
    private String url;
}