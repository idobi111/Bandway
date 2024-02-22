package com.mta.bandway.repositories;

import com.mta.bandway.entities.FlightOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlightOrderRepository extends JpaRepository<FlightOrder, Long> {
}
