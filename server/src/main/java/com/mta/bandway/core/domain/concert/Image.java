package com.mta.bandway.core.domain.concert;

import lombok.Data;

@Data
public class Image {
    private String ratio;
    private String url;
    private int width;
    private int height;
    private boolean fallback;

}
