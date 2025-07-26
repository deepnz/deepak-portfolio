package com.deepaknalla.portfolio.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/media")
@CrossOrigin(origins = "http://localhost:5173")
public class MediaController {

    @GetMapping("/movies")
    public String getCurrentMovies() {
        return "Current movies endpoint";
    }

    @GetMapping("/games")
    public String getCurrentGames() {
        return "Current games endpoint";
    }
}