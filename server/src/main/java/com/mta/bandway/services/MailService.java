package com.mta.bandway.services;

import com.mta.bandway.api.domain.request.MailRequestDto;
import com.mta.bandway.entities.User;
import com.mta.bandway.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;

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


    public void enableSubscriptionEmail(String email) {
        User user = userRepository.findByEmail(email).orElse(
                userRepository.save(User.builder().email(email).build())
        );
        user.setIsSubscribed(true);
        userRepository.save(user);
        sendEmail(MailRequestDto.builder()
                .to(email)
                .subject("Subscription added successfully")
                .text("You have successfully subscribed to our newsletter")
                .build());
    }


    public void disableSubscriptionEmail(String email) {
        User user = userRepository.findByEmail(email).orElse(
                userRepository.save(User.builder().email(email).build())
        );
        user.setIsSubscribed(false);
        userRepository.save(user);
        sendEmail(MailRequestDto.builder()
                .to(email)
                .subject("Subscription is disable for now")
                .text("You will not get any more emails from us.")
                .build());
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

