package com.reinnav.pawdoptbackend.controller;

import com.reinnav.pawdoptbackend.model.User;
import com.reinnav.pawdoptbackend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        boolean isAuthenticated = authenticationService.authenticate(user.getUsername(), user.getPassword());

        if (isAuthenticated) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(401).build();
        }
    }
}
