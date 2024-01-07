package com.reinnav.pawdoptbackend.model;

import org.springframework.data.annotation.Id;

public class Dog {

    @Id
    private String id;

    private String name;
    private String age;
    private String breed;
    private String description;
    private HealthStatus healthStatus;
    private String image; // image path in resources/image folder

    public Dog(){
        
    }
    
    public Dog(String name, String age, String breed, String description, HealthStatus healthStatus) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.description = description;
        this.healthStatus = healthStatus;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public HealthStatus getHealthStatus() {
        return healthStatus;
    }

    public void setHealthStatus(HealthStatus healthStatus) {
        this.healthStatus = healthStatus;
    }

    public String getImage() {
        return this.image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}