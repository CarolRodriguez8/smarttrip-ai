package com.carolinapozo.smarttrip.dto;

import java.util.List;

public class TripResponse {

    private String destination;
    private List<String> activities;

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public List<String> getActivities() {
        return activities;
    }

    public void setActivities(List<String> activities) {
        this.activities = activities;
    }
}