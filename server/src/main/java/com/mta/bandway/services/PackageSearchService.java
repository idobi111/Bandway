package com.mta.bandway.services;

import com.mta.bandway.api.domain.request.PackageSearchOrderDto;
import com.mta.bandway.entities.PackageOrder;
import com.mta.bandway.repositories.PackageOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PackageSearchService {

    private final PackageOrderRepository packageOrderRepository;

    @Autowired
    public PackageSearchService(PackageOrderRepository packageOrderRepository) {
        this.packageOrderRepository = packageOrderRepository;

    }

    public void savePackageSearchOrder(PackageSearchOrderDto packageSearchOrderDto) {

        packageOrderRepository.save(PackageOrder.builder()
                .userId(packageSearchOrderDto.getUserId())
                .orderDate(packageSearchOrderDto.getOrderDate())
                .checkInDate(packageSearchOrderDto.getCheckInDate())
                .checkOutDate(packageSearchOrderDto.getCheckOutDate())
                .roomCount(packageSearchOrderDto.getRoomCount())
                .adults(packageSearchOrderDto.getAdults())
                .children(packageSearchOrderDto.getChildren())
                .minPrice(packageSearchOrderDto.getMinPrice())
                .maxPrice(packageSearchOrderDto.getMaxPrice())
                .fromCity(packageSearchOrderDto.getFromCity())
                .toCity(packageSearchOrderDto.getToCity())
                .fromCountry(packageSearchOrderDto.getFromCountry())
                .toCountry(packageSearchOrderDto.getToCountry())
                .build());
    }
}
