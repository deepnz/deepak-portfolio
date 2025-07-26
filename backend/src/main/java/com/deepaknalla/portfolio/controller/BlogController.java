package com.deepaknalla.portfolio.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/blog")
@CrossOrigin(origins = "http://localhost:5173")
public class BlogController {

    @GetMapping
    public String getBlogPosts() {
        return "Blog posts endpoint";
    }
}