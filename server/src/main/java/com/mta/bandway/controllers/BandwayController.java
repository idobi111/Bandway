package com.mta.bandway.controllers;

import com.mta.bandway.api.domain.request.CarRentalRequestDto;
import com.mta.bandway.api.domain.request.FlightRequestDto;
import com.mta.bandway.api.domain.request.HotelRequestDto;
import com.mta.bandway.api.domain.response.ConcertResponseDto;
import com.mta.bandway.api.domain.response.HotelResponseDto;
import com.mta.bandway.services.CarRentalService;
import com.mta.bandway.services.ConcertService;
import com.mta.bandway.services.FlightService;
import com.mta.bandway.services.HotelService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/bandway")
@AllArgsConstructor
@CrossOrigin
public class BandwayController {
    private final HotelService hotelService;
    private final ConcertService concertService;
    private final FlightService flightService;
    private final CarRentalService carRentalService;

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
        List<ConcertResponseDto> res = concertService.getConcertsByPerformer(performer);
        if (res.equals(new ArrayList<>())) {
            return ResponseEntity.badRequest().body("No concerts found for this performer");
        }
        return ResponseEntity.ok(res);
    }

    @GetMapping("/flightAutoCompleteCity")
    public ResponseEntity<?> getCities(@RequestParam String text) {
        return ResponseEntity.ok(flightService.getCities(text));
    }

    @PostMapping("/searchFlight")
    public ResponseEntity<?> getFlight(@RequestBody FlightRequestDto requestFlightDto) {
        return ResponseEntity.ok(flightService.searchFlight(requestFlightDto));
    }

    @GetMapping("/carAutoComplete")
    public ResponseEntity<?> getCarAutoComplete(@RequestParam String query) {
        return ResponseEntity.ok(carRentalService.getCityAutoComplete(query));
    }

    @PostMapping("/searchCarRental")
    public ResponseEntity<?> searchCar(@RequestBody CarRentalRequestDto requestCarRentalDto) {
        return ResponseEntity.ok(carRentalService.searchCarRental(requestCarRentalDto));
    }

    @GetMapping("/getHotelLink")
    public ResponseEntity<?> getHotelLink(@RequestParam Integer hotelId, @RequestParam String checkInDate, @RequestParam String checkOutDate) {
        return ResponseEntity.ok(hotelService.getLink(hotelId, checkInDate, checkOutDate));
    }
}
