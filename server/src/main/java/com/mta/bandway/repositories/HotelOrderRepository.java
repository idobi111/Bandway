package com.mta.bandway.repositories;

import com.mta.bandway.entities.HotelOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelOrderRepository extends JpaRepository<HotelOrder, Long> {
}

