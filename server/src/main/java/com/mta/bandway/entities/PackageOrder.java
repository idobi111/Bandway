package com.mta.bandway.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "package_order")
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PackageOrder implements java.io.Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private String orderDate;
    private String checkInDate;
    private String checkOutDate;
    private int roomCount;
    private int adults;
    private int children;
    private int minHotelPrice;
    private int maxHotelPrice;
    private int minCarPrice;
    private int maxCarPrice;
    private int minFlightPrice;
    private int maxFlightPrice;
    private String fromCity;
    private String toCity;
    private String fromCountry;
    private String toCountry;
}
