package com.mta.bandway.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@Table(name = "concert_order")
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ConcertOrder implements java.io.Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private String orderDate;
    private String concertDate;
    private String concertAddress;
    private String concertName;
}
