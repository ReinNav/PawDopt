package com.reinnav.pawdoptbackend.controller;

import com.reinnav.pawdoptbackend.model.Dog;
import com.reinnav.pawdoptbackend.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dogs")
public class DogController {

    @Autowired
    private DogService dogService;

    /**
     * Responds to a get API, finding all instances of dog
     * @return all dog instances
     */
    @GetMapping
    public List<Dog> findAll() {
        return dogService.findAll();
    }

    /**
     * Responds to a get API, finding a dog by ID
     * @param id
     * @return a dog instance with id
     */
    @GetMapping("/{id}")
    public Dog findById(@PathVariable String id) {
        return dogService.findById(id);
    }

    /**
     * saves a new dog instance to DB
     * @param dog new dog
     * @return new dog saved
     */
    @PostMapping
    public Dog create(@RequestBody Dog dog) {
        return dogService.save(dog);
    }

    @PutMapping("/{id}")
    public Dog update(@RequestBody Dog dog) {
        return dogService.save(dog);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        dogService.deleteById(id);
    }
}
