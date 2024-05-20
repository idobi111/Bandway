package com.mta.bandway.services;

import com.mta.bandway.api.domain.request.MailRequestDto;
import com.mta.bandway.entities.User;
import com.mta.bandway.exceptions.UserAlreadyExistException;
import com.mta.bandway.exceptions.UserUnsubscribedException;
import com.mta.bandway.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MailService {
    private final JavaMailSender emailSender;
    private final String fromMail;
    private final UserRepository userRepository;

    @Autowired
    public MailService(JavaMailSender emailSender,
                       @Value("${spring.mail.username}") String fromMail,
                       UserRepository userRepository) {
        this.emailSender = emailSender;
        this.fromMail = fromMail;
        this.userRepository = userRepository;
    }


    public String enableSubscriptionEmail(String email) {
        email = email.toLowerCase();
        Optional<User> findUser = userRepository.findByEmail(email);
        if (findUser.isEmpty()) {
            User user = User.builder()
                    .email(email)
                    .isSubscribed(true)
                    .build();
            userRepository.save(user);
            sendEmail(MailRequestDto.builder()
                    .to(email)
                    .subject("Subscription added successfully")
                    .text("You have successfully subscribed to our newsletter")
                    .build());
        } else {
            throw new UserAlreadyExistException("The user already subscribed");
        }
        return "Subscription added successfully";
    }


    public String disableSubscriptionEmail(String email) {
        email = email.toLowerCase();
        Optional<User> findUser = userRepository.findByEmail(email);
        if (findUser.isPresent() && findUser.get().getIsSubscribed().equals(true)) {
            User user = findUser.get();
            user.setIsSubscribed(false);
            userRepository.save(user);
            sendEmail(MailRequestDto.builder()
                    .to(email)
                    .subject("Subscription is disable for now")
                    .text("You will not get any more emails from us.")
                    .build());
        } else {
            throw new UserUnsubscribedException("The user does not register as subscribe email in our services");
        }
        return "Unsubscription preformed successfully";
    }

    public Long sendMessageAllSubscribedUsers(String subject, String text) {
        List<User> users = userRepository.findByIsSubscribed(true);
        for (User user : users) {
            if (user.getIsSubscribed()) {
                sendEmail(MailRequestDto.builder()
                        .to(user.getEmail())
                        .subject(subject)
                        .text(text)
                        .build());
            }
        }
        return (long) users.size();
    }

    private void sendEmail(MailRequestDto mailRequestDto) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromMail);
        message.setTo(mailRequestDto.getTo());
        message.setSubject(mailRequestDto.getSubject());
        message.setText(mailRequestDto.getText());
        emailSender.send(message);
    }

}

