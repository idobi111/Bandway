package com.mta.bandway.controllers;

import com.mta.bandway.api.domain.HotelResponseDto;
import com.mta.bandway.api.domain.RequestHotelDto;
import com.mta.bandway.services.HotelService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bandway")
@AllArgsConstructor
public class BandwayController {
    private final HotelService hotelService;

    @GetMapping("/health")
    public String health() {
        return "Bandway is healthy!";
    }

    @PostMapping("/searchHotel")
    public ResponseEntity<List<HotelResponseDto>> searchHotel(@RequestBody RequestHotelDto requestHotelDto) {
        return hotelService.getHotels(requestHotelDto);
    }
}
