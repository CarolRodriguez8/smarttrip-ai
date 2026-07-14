package com.carolinapozo.smarttrip.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.carolinapozo.smarttrip.dto.TripRequest;
import com.carolinapozo.smarttrip.dto.TripResponse;

@Service
public class TripService {

    public TripResponse generateTrip(TripRequest trip) {

        TripResponse response = new TripResponse();

        response.setDestination(trip.getDestination());

        String destination = trip.getDestination().toLowerCase();
        String travelType = trip.getTravelType().toLowerCase();

        if (destination.equals("roma")
        && travelType.equals("gastronomico")) {

    response.setActivities(List.of(
            "Trastevere",
            "Mercado Campo de' Fiori",
            "Ruta de pasta tradicional"
    ));

    return response;
}

        if (destination.equals("barcelona")) {

            response.setActivities(List.of(
                    "Sagrada Familia",
                    "Park Güell",
                    "Casa Batlló"
            ));

        } else if (destination.equals("roma")) {

            response.setActivities(List.of(
                    "Coliseo",
                    "Foro Romano",
                    "Vaticano"
            ));

        } else if (destination.equals("paris")) {

            response.setActivities(List.of(
                    "Torre Eiffel",
                    "Museo del Louvre",
                    "Arco del Triunfo"
            ));

        } else {

            response.setActivities(List.of(
                    "Información turística no disponible"
            ));
        }

        return response;
    }
}