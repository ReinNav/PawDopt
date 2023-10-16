package com.reinnav.pawdoptbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("/sayhello")
    public String sayHello() {
        System.out.println("Hello");
        return "Hello";
    }
}
