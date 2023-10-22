package com.reinnav.pawdoptbackend.model;

import org.springframework.data.annotation.Id;

public class Dog {


    @Id
    private String id;

    private String name;

    private int age;

    private String breed;

    private String description;

    private HealthStatus healthStatus;

    public Dog(String name, int age, String breed, String description, HealthStatus healthStatus) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.description = description;
        this.healthStatus = healthStatus;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getBreed() {
        return breed;
    }

    public String getDescription() {
        return description;
    }

    public HealthStatus getHealthStatus() {
        return healthStatus;
    }
}
