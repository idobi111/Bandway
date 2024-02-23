package com.mta.bandway.repositories;

import com.mta.bandway.entities.CarRentalOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRentalOrderRepository extends JpaRepository<CarRentalOrder, Long> {

}
