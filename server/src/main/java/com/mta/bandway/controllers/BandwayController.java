package com.mta.bandway.controllers;

import com.mta.bandway.api.domain.request.*;
import com.mta.bandway.api.domain.response.*;
import com.mta.bandway.entities.User;
import com.mta.bandway.exceptions.InvalidCityException;
import com.mta.bandway.exceptions.UserAlreadyExistException;
import com.mta.bandway.exceptions.UserNotFoundException;
import com.mta.bandway.services.*;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
@Slf4j
public class BandwayController {
    private final HotelService hotelService;
    private final ConcertService concertService;
    private final FlightService flightService;
    private final CarRentalService carRentalService;
    private final MailService mailService;
    private final UserService userService;

    @GetMapping(value = "/health", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Bandway is healthy!");
    }

    @PostMapping(value = "/searchHotel", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<List<HotelResponseDto>> searchHotel(@RequestBody HotelRequestDto requestHotelDto) {
        try {
            return ResponseEntity.ok(hotelService.getHotels(requestHotelDto));
        } catch (InvalidCityException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
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
    public ResponseEntity<String> subscribeUserMail(@RequestParam String userMail) {
        try {
            return new ResponseEntity<>(mailService.enableSubscriptionEmail(userMail), HttpStatus.OK);
        } catch (UserAlreadyExistException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/unsubscribeMail", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<String> unsubscribeUserMail(@RequestParam String userMail) {
        try {
            return new ResponseEntity<>(mailService.disableSubscriptionEmail(userMail), HttpStatus.OK);
        } catch (UserAlreadyExistException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/sendMessageAllSubscribedUsers", produces = "application/json", headers = "Accept=application/json")
    public ResponseEntity<Long> sendMessageAllSubscribedUsers(@RequestParam String subject, @RequestParam String text) {
        return ResponseEntity.ok(mailService.sendMessageAllSubscribedUsers(subject, text));
    }

    @PostMapping(value = "/registerUser")
    public ResponseEntity<String> registerUser(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String email, @RequestParam String password, @RequestParam String phone, @RequestParam String username, @RequestParam(value = "isSubscribe", required = false) Boolean isSubscribe) {
        if (isSubscribe == null) isSubscribe = false;
        try {
            return new ResponseEntity<>(userService.registerUser(firstName, lastName, username, password, email, phone, isSubscribe), HttpStatus.CREATED);
        } catch (UserAlreadyExistException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/login")
    public ResponseEntity<User> login(@RequestParam String username, @RequestParam String password) {
        try {
            return new ResponseEntity<>(userService.loginUser(username, password), HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(User.builder().build(), HttpStatus.CONFLICT);
        } catch (Exception e) {
            return new ResponseEntity<>(User.builder().build(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/saveFlightOrder")
    public void userSearchFlight(@RequestBody FlightOrderDetailsDto flightOrderDetails) {
        try {
            flightService.saveFlightOrder(flightOrderDetails);
        } catch (Exception e) {
            log.error("Error saving flight order", e);
        }
    }

    @PostMapping(value = "/saveHotelOrder")
    public void saveHotelOrder(@RequestBody HotelDetailsDto hotelDetailsDto) {
        try {
            hotelService.saveHotelOrder(hotelDetailsDto);
        } catch (Exception e) {
            log.error("Error saving hotel order", e);
        }
    }

    @PostMapping(value = "/saveCarOrder")
    public void saveCarOrder(@RequestBody CarRentalDetailsDto carRentalDetailsDto) {
        try {
            carRentalService.saveCarRentalOrder(carRentalDetailsDto);
        } catch (Exception e) {
            log.error("Error saving car order", e);
        }
    }

    @PostMapping(value = "/saveConcertOrder")
    public void saveConcertOrder(@RequestBody ConcertDetailsDto concertDetailsDto) {
        try {
            concertService.saveConcertOrder(concertDetailsDto);
        } catch (Exception e) {
            log.error("Error saving concert order", e);
        }
    }

}
