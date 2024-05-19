package com.mta.bandway.controllers;

import com.mta.bandway.api.domain.request.CarRentalRequestDto;
import com.mta.bandway.api.domain.request.FlightRequestDto;
import com.mta.bandway.api.domain.request.HotelRequestDto;
import com.mta.bandway.api.domain.response.*;
import com.mta.bandway.exceptions.UserAlreadyExistException;
import com.mta.bandway.services.*;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
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
    private final MailService mailService;
    private final RegisterService registerService;

    @GetMapping(value = "/health", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Bandway is healthy!");
    }

    @PostMapping(value = "/searchHotel", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<List<HotelResponseDto>> searchHotel(@RequestBody HotelRequestDto requestHotelDto) {
        return ResponseEntity.ok(hotelService.getHotels(requestHotelDto));
    }

    @GetMapping(value = "/searchConcert", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<List<ConcertResponseDto>> searchConcert(@RequestParam String performer, @RequestParam(required = false) List<String> cities) {
        List<ConcertResponseDto> res = concertService.getConcertsByPerformer(performer, cities);
        return ResponseEntity.ok(res);
    }

    @GetMapping(value = "/flightCityAutoComplete", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<List<AutoCompleteCityResponseDto>> getCities(@RequestParam String text) {
        return ResponseEntity.ok(flightService.getCities(text));
    }

    @PostMapping(value = "/searchOneWayFlight", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<OneWayFlightResponseDto> getOneWayFlight(@RequestBody FlightRequestDto requestFlightDto) {
        return ResponseEntity.ok(flightService.searchOneWayFlight(requestFlightDto));
    }

    @PostMapping(value = "/searchRoundWayFlight", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<RoundWayFlightResponseDto> getRoundWayFlight(@RequestBody FlightRequestDto requestFlightDto) {
        return ResponseEntity.ok(flightService.searchRoundWayFlight(requestFlightDto));
    }

    @GetMapping(value = "/carRentalCityAutoComplete", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<List<AutoCompleteCityResponseDto>> getCarAutoComplete(@RequestParam String query) {
        return ResponseEntity.ok(carRentalService.getCityAutoComplete(query));
    }

    @GetMapping(value = "/flightPrice")
    public ResponseEntity<List<FlightPriceResponseDto>> getFlightPrice(@RequestParam String token, @RequestParam String itineraryId) {
        return ResponseEntity.ok(flightService.getFlightPricing(token, itineraryId));
    }

    @PostMapping(value = "/searchCarRental", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<CarRentalResponseDto> searchCar(@RequestBody CarRentalRequestDto requestCarRentalDto) {
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

    @PostMapping(value = "/subscribeMail", produces = "application/json", headers = "Accept=application/json")
    public void subscribeUserMail(@RequestParam String userMail) {
        mailService.enableSubscriptionEmail(userMail);
    }

    @PostMapping(value = "/unsubscribeMail", produces = "application/json", headers = "Accept=application/json")
    public void unsubscribeUserMail(@RequestParam String userMail) {
        mailService.disableSubscriptionEmail(userMail);
    }

    @PostMapping(value = "/sendMessageAllSubscribedUsers", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<Long> sendMessageAllSubscribedUsers(@RequestParam String subject, @RequestParam String text) {
        return ResponseEntity.ok(mailService.sendMessageAllSubscribedUsers(subject, text));
    }

    @PostMapping(value = "/registerUser")
    public ResponseEntity<String> registerUser(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String email, @RequestParam String password, @RequestParam String phone, @RequestParam String username, @RequestParam(value = "isSubscribe", required = false) Boolean isSubscribe) {
        if (isSubscribe == null) isSubscribe = false;
        try {
            return new ResponseEntity<>(registerService.registerUser(firstName, lastName, username, password, email, phone, isSubscribe), HttpStatus.CREATED);
        } catch (UserAlreadyExistException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
