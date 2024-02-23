package com.mta.bandway.services;

import com.mta.bandway.repositories.ConcertOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ConcertService {
    @Value("${booking.api.url}")
    private String apiUrl;
    @Autowired
    private RestTemplate restTemplate;
    private ConcertOrderRepository concertOrderRepository;

}
