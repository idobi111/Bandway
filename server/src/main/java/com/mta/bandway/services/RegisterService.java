package com.mta.bandway.services;

import com.mta.bandway.entities.User;
import com.mta.bandway.exceptions.UserAlreadyExistException;
import com.mta.bandway.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class RegisterService {

    private final UserRepository userRepository;

    public String registerUser(String firstName, String lastName, String username, String password, String email, String phone, Boolean isSubscribe) {
        Optional<User> findUser = userRepository.findByUsernameOrPhoneOrEmail(username, phone, email);
        if (findUser.isPresent()) {
            User user = findUser.get();
            if (user.getUsername().equals(username.toLowerCase()))
                throw new UserAlreadyExistException("Username already exists");
            if (user.getPhone().equals(phone.toLowerCase()))
                throw new UserAlreadyExistException("Phone already exists");
            if (user.getEmail().equals(email.toLowerCase()))
                throw new UserAlreadyExistException("Email already exists");
        }
        User user = User.builder()
                .username(username.toLowerCase())
                .firstName(firstName.toLowerCase())
                .lastName(lastName.toLowerCase())
                .password(password)
                .email(email.toLowerCase())
                .phone(phone.toLowerCase())
                .isSubscribed(isSubscribe)
                .build();
        userRepository.save(user);
        return "User signed up successfully";
    }
}
