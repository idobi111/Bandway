package com.mta.bandway.controllers;

import com.mta.bandway.api.domain.HotelDto;
import com.mta.bandway.core.domain.hotel.HotelResponse;
import com.mta.bandway.services.HotelService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<HotelResponse> searchHotel(@RequestBody HotelDto hotelDto) {
        return hotelService.getHotels(hotelDto);
    }
}
