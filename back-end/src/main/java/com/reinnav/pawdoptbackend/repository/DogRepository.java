package com.reinnav.pawdoptbackend.repository;

import com.reinnav.pawdoptbackend.model.Dog;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DogRepository extends MongoRepository<Dog, String> {
}
