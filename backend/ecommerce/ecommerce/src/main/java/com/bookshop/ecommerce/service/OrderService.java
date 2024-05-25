package com.bookshop.ecommerce.service;


import com.bookshop.ecommerce.exception.OrderException;
import com.bookshop.ecommerce.exception.ProductException;
import com.bookshop.ecommerce.model.Address;
import com.bookshop.ecommerce.model.Order;
import com.bookshop.ecommerce.model.User;

import java.util.List;

public interface OrderService {
    public Order createOrder(User user, Address shippingAddress);
    public Order findOrderById(Long orderId) throws OrderException;
    public List<Order> usersOrderHistory(Long userId);
    public Order placedOrder(Long orderId) throws OrderException;
    public Order confirmedOrder(Long orderId) throws OrderException;
    public Order ShippedOrder(Long orderId) throws OrderException;
    public Order deliveredOrder(Long orderId) throws OrderException;
    public Order cancelOrder(Long orderId) throws OrderException;
    public List<Order> getAllOrders();
    public void deleteOrder(Long orderId) throws OrderException;
}
