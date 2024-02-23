package com.mta.bandway.repositories;

import com.mta.bandway.entities.ConcertOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConcertOrderRepository extends JpaRepository<ConcertOrder, Long> {
}
