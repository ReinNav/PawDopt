package com.reinnav.pawdoptbackend.service;

import com.reinnav.pawdoptbackend.model.Dog;
import com.reinnav.pawdoptbackend.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DogService {
    @Autowired
    private DogRepository dogRepository;

    /**
     * Returns all instances of dog
     * @return all dog instances
     */
    public List<Dog> findAll() {
        return dogRepository.findAll();
    }

}
