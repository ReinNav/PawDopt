package com.reinnav.pawdoptbackend.controller;

import com.reinnav.pawdoptbackend.model.Dog;
import com.reinnav.pawdoptbackend.model.HealthStatus;
import com.reinnav.pawdoptbackend.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.io.IOException;
import java.nio.file.Files;
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
    public Dog create(@RequestParam("name") String name,
                      @RequestParam("age") String age,
                      @RequestParam("breed") String breed,
                      @RequestParam("description") String description,
                      @RequestParam("healthStatus") String healthStatus,
                      @RequestParam(value = "image", required = false) MultipartFile image) throws IOException {
        Dog dog = new Dog(name, age, breed, description, HealthStatus.valueOf(healthStatus));

        Dog savedDog = dogService.save(dog);

        if (!image.isEmpty()) {
            String relativePath = "./images/"; 
            String imageName = savedDog.getId() + "_" + image.getOriginalFilename();
            Path path = Paths.get(relativePath + imageName).toAbsolutePath();
            Files.createDirectories(path.getParent()); // create if not exist
            Files.write(path, image.getBytes());
            
            savedDog.setImage(imageName);
            dogService.save(savedDog);
        }

        return savedDog;
    }

    /**
     * updates a dog instance to DB
     * @param dog new dog
     * @return new dog saved
     */
    @PutMapping("/{id}")
    public Dog update(@PathVariable String id,
                  @RequestParam("name") String name,
                  @RequestParam("age") String age,
                  @RequestParam("breed") String breed,
                  @RequestParam("description") String description,
                  @RequestParam("healthStatus") String healthStatus,
                  @RequestParam(value = "image", required = false) MultipartFile image) throws IOException {
    Dog dog = dogService.findById(id);
    dog.setName(name);
    dog.setAge(age);
    dog.setBreed(breed);
    dog.setDescription(description);
    dog.setHealthStatus(HealthStatus.valueOf(healthStatus));

    if (image != null && !image.isEmpty()) {
        String relativePath = "./images/";
        String imageName = id + "_" + image.getOriginalFilename();
        Path path = Paths.get(relativePath + imageName).toAbsolutePath();
        Files.createDirectories(path.getParent());
        Files.write(path, image.getBytes());
        dog.setImage(imageName); 
    }

    return dogService.save(dog);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        dogService.deleteById(id);
    }
}
