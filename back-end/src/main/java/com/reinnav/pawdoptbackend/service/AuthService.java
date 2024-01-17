package com.reinnav.pawdoptbackend.service;

import com.reinnav.pawdoptbackend.model.User;
import com.reinnav.pawdoptbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.annotation.PostConstruct;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    public void init() {
        if (userRepository.findByUsername("admin") == null) {
            User user = new User();
            user.setUsername("admin");
            user.setPassword("password");
            userRepository.save(user);
        }
    }


    public boolean authenticate(String username, String password) {
        User user = userRepository.findByUsername(username);
        return user != null;
    }
}
