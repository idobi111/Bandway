package com.mta.bandway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@ConfigurationProperties
@EnableScheduling
public class BandwayApplication {

    public static void main(String[] args) {
        SpringApplication.run(BandwayApplication.class, args);
    }

}
