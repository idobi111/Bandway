package com.mta.bandway.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bandway")
public class BandwayController {

    @GetMapping("/health")
    @ResponseBody
    public String health() {
        return "Bandway is healthy!";
    }
}