package com.mta.bandway.controllers;

import com.mta.bandway.api.domain.request.CarRentalRequestDto;
import com.mta.bandway.api.domain.request.FlightRequestDto;
import com.mta.bandway.api.domain.request.HotelRequestDto;
import com.mta.bandway.api.domain.response.*;
import com.mta.bandway.services.CarRentalService;
import com.mta.bandway.services.ConcertService;
import com.mta.bandway.services.FlightService;
import com.mta.bandway.services.HotelService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bandway")
@AllArgsConstructor
@CrossOrigin
@EnableScheduling
public class BandwayController {
    private final HotelService hotelService;
    private final ConcertService concertService;
    private final FlightService flightService;
    private final CarRentalService carRentalService;

    @GetMapping(value = "/health", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Bandway is healthy!");
    }

    @PostMapping(value = "/searchHotel", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<List<HotelResponseDto>> searchHotel(@RequestBody HotelRequestDto requestHotelDto) {
        return ResponseEntity.ok(hotelService.getHotels(requestHotelDto));
    }

    @GetMapping(value = "/searchConcert", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<List<ConcertResponseDto>> searchConcert(@RequestParam String performer) {
        List<ConcertResponseDto> res = concertService.getConcertsByPerformer(performer);
        return ResponseEntity.ok(res);
    }

    @GetMapping(value = "/flightCityAutoComplete", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<List<AutoCompleteCityResponseDto>> getCities(@RequestParam String text) {
        return ResponseEntity.ok(flightService.getCities(text));
    }

    @PostMapping(value = "/searchFlight", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<FlightResponseDto> getFlight(@RequestBody FlightRequestDto requestFlightDto) {
        return ResponseEntity.ok(flightService.searchFlight(requestFlightDto));
    }

    @GetMapping(value = "/carRentalCityAutoComplete", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<List<AutoCompleteCityResponseDto>> getCarAutoComplete(@RequestParam String query) {
        return ResponseEntity.ok(carRentalService.getCityAutoComplete(query));
    }

    @PostMapping(value = "/searchCarRental", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<List<CarRentalResponseDto>> searchCar(@RequestBody CarRentalRequestDto requestCarRentalDto) {
        return ResponseEntity.ok(carRentalService.searchCarRental(requestCarRentalDto));
    }

    @GetMapping(value = "/getHotelLink", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<String> getHotelLink(@RequestParam Integer hotelId, @RequestParam String checkInDate, @RequestParam String checkOutDate) {
        return ResponseEntity.ok(hotelService.getLink(hotelId, checkInDate, checkOutDate));
    }

    @GetMapping(value = "/artistAutoComplete", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<List<ArtistAutoCompleteResponseDto>> artistAutoComplete(@RequestParam String artistName) {
        return ResponseEntity.ok(concertService.getArtistAutoComplete(artistName));
    }

    @GetMapping(value = "/upcomingConcert", headers = "Accept=application/json")
    public ResponseEntity<List<ConcertResponseDto>> upcomingConcert() {
        return ResponseEntity.ok(concertService.getUpcomingConcert());
    }

    @GetMapping(value = "/artistSpotifyLink", headers = "Accept=application/json")
    public ResponseEntity<SpotifyLinkResponseDto> getArtistSpotifyLink(String artistId) {
        return ResponseEntity.ok(concertService.getArtistUrl(artistId));
    }
}
