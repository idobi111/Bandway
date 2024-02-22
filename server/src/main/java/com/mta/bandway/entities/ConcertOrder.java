package com.mta.bandway.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
@Table(name = "concert_order")
@JsonIgnoreProperties({"hibernateLazyInitializer"})

public class ConcertOrder implements java.io.Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private String orderDate;
    private String concertDate;
    private String concertAddress;
    private String concertName;
    private String concertArtist;
}
