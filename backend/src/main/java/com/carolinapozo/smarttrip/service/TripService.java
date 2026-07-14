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

        // ROMA

        if (destination.equals("roma")
                && travelType.equals("gastronomico")) {

            response.setActivities(List.of(
                    "Trastevere",
                    "Mercado Campo de' Fiori",
                    "Ruta de pasta tradicional"
            ));

            return response;
        }

        if (destination.equals("roma")
                && travelType.equals("romantico")) {

            response.setActivities(List.of(
                    "Piazza Navona",
                    "Paseo nocturno por el Tíber",
                    "Cena con vistas al Coliseo"
            ));

            return response;
        }

        if (destination.equals("roma")
                && travelType.equals("aventura")) {

            response.setActivities(List.of(
                    "Ruta en bicicleta por Roma",
                    "Senderismo en la Vía Appia",
                    "Exploración de las Catacumbas"
            ));

            return response;
        }

        // BARCELONA

        if (destination.equals("barcelona")
                && travelType.equals("gastronomico")) {

            response.setActivities(List.of(
                    "Mercado de la Boquería",
                    "Ruta de tapas por El Born",
                    "Experiencia gastronómica en Gràcia"
            ));

            return response;
        }

        if (destination.equals("barcelona")
                && travelType.equals("romantico")) {

            response.setActivities(List.of(
                    "Paseo por la Barceloneta",
                    "Atardecer en el Búnker del Carmel",
                    "Cena con vistas al mar"
            ));

            return response;
        }

        // PARÍS

        if (destination.equals("paris")
                && travelType.equals("romantico")) {

            response.setActivities(List.of(
                    "Torre Eiffel al atardecer",
                    "Crucero por el Sena",
                    "Paseo por Montmartre"
            ));

            return response;
        }

        if (destination.equals("paris")
                && travelType.equals("gastronomico")) {

            response.setActivities(List.of(
                    "Ruta de pastelerías parisinas",
                    "Mercado de Rue Cler",
                    "Cena tradicional francesa"
            ));

            return response;
        }

        // ITINERARIOS GENERALES

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