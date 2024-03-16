package com.mta.bandway.controllers;

import com.mta.bandway.api.domain.request.HotelRequestDto;
import com.mta.bandway.api.domain.response.HotelResponseDto;
import com.mta.bandway.services.ConcertService;
import com.mta.bandway.services.HotelService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/bandway")
@AllArgsConstructor
public class BandwayController {
    private final HotelService hotelService;
    private final ConcertService concertService;

    @GetMapping("/health")
    public String health() {
        return "Bandway is healthy!";
    }

    @PostMapping("/searchHotel")
    public ResponseEntity<List<HotelResponseDto>> searchHotel(@RequestBody HotelRequestDto requestHotelDto) {
        return hotelService.getHotels(requestHotelDto);
    }

    @GetMapping("/searchConcert")
    //TODO: should handle space in performer name (e.g. "taylor swift") should be "taylor_swift"
    public ResponseEntity<?> searchConcert(@RequestParam String performer) {
        if (concertService.getConcertsByPerformer(performer).equals(new ArrayList<>())) {
            return ResponseEntity.badRequest().body("No concerts found for this performer");
        }
        return ResponseEntity.ok(concertService.getConcertsByPerformer(performer));
    }
}
