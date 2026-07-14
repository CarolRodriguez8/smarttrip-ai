package com.carolinapozo.smarttrip.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carolinapozo.smarttrip.dto.TripRequest;
import com.carolinapozo.smarttrip.dto.TripResponse;
import com.carolinapozo.smarttrip.service.TripService;

@RestController
@RequestMapping("/api/trips")
@CrossOrigin(origins = "http://localhost:5173")
public class TripController {

    private final TripService tripService;

    public TripController(TripService tripService) {
        this.tripService = tripService;
    }

    @PostMapping
    public TripResponse createTrip(@RequestBody TripRequest trip) {

        return tripService.generateTrip(trip);
    }
}