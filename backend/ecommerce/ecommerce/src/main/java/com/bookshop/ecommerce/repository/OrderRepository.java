package com.bookshop.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bookshop.ecommerce.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

    //old version
    //@Query("SELECT o FROM Order o WHERE o.user.id = :userId AND (o.orderStatus = PLACED OR o.orderStatus = CONFIRMED OR o.orderStatus = SHIPPED OR o.orderStatus = DELIVERED)")

    //new version
    @Query("SELECT o FROM Order o WHERE o.user.id = :userId")
    public List<Order> getUsersOrders(@Param("userId") Long userId);
}
