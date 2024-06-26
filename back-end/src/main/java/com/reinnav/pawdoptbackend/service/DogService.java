package com.reinnav.pawdoptbackend.service;

import com.reinnav.pawdoptbackend.exception.EntityNotFoundException;
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

    /**
     * Returns a dog with a certain id
     * @param id id of dog instance
     * @return A dog with id
     */
    public Dog findById(String id) {
        return dogRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Dog with ID " + id + " not found"));
    }

    /**
     * Saves a new dog instance to DB
     * @param dog new Dog
     * @return Dog saved
     */
    public Dog save(Dog dog){
        return dogRepository.save(dog);
    }

    /**
     * Deletes a dog with a certain id from DB
     * @param id id of dog instance
     * @return A dog with id
     */
    public void deleteById(String id){
        dogRepository.deleteById(id);
    }



}
