package com.reinnav.pawdoptbackend.repository;

import com.reinnav.pawdoptbackend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByUsername(String username);
}
