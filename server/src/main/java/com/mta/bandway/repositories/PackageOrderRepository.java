package com.mta.bandway.repositories;

import com.mta.bandway.entities.PackageOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackageOrderRepository extends JpaRepository<PackageOrder, Long> {
}

