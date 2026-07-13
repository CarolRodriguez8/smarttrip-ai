package com.carolinapozo.smarttrip.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carolinapozo.smarttrip.dto.TripRequest;
import com.carolinapozo.smarttrip.dto.TripResponse;

@RestController
@RequestMapping("/api/trips")
public class TripController {

    @PostMapping
    public TripResponse createTrip(@RequestBody TripRequest trip) {

        TripResponse response = new TripResponse();

        response.setDestination(trip.getDestination());

        response.setActivities(List.of(
                "Sagrada Familia",
                "Park Güell",
                "Casa Batlló"
        ));

        return response;
    }
}