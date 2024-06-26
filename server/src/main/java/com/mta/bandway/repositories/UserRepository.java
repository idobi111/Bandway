package com.mta.bandway.repositories;

import com.mta.bandway.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    Optional<User> findByUsernameOrPhoneOrEmail(String username, String phone, String email);

    Optional<User> findByUsernameAndPassword(String username, String password);

    List<User> findByIsSubscribed(boolean isSubscribe);

}

