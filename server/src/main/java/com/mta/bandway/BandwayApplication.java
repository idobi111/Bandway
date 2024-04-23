package com.mta.bandway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;

@SpringBootApplication
@ConfigurationProperties
public class BandwayApplication {

    public static void main(String[] args) {
        SpringApplication.run(BandwayApplication.class, args);
    }

}
