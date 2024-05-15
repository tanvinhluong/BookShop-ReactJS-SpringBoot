package com.bookshop.ecommerce.controller;

import com.bookshop.ecommerce.exception.OrderException;
import com.bookshop.ecommerce.model.Order;
import com.bookshop.ecommerce.response.ApiResponse;
import com.bookshop.ecommerce.service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/orders")
public class AdminOrderController {

    private OrderService orderService;

    public AdminOrderController(OrderService orderService) {
        this.orderService=orderService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Order>> getAllOrdersHandler(){
        List<Order> orders=orderService.getAllOrders();

        return new ResponseEntity<>(orders, HttpStatus.ACCEPTED);
    }

    @PutMapping("/{orderId}/confirmed")
    public ResponseEntity<Order> ConfirmedOrderHandler(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws OrderException {
        Order order=orderService.confirmedOrder(orderId);
        return new ResponseEntity<Order>(order,HttpStatus.ACCEPTED);
    }

    @PutMapping("/{orderId}/ship")
    public ResponseEntity<Order> shippedOrderHandler(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws OrderException{
        Order order=orderService.ShippedOrder(orderId);
        return new ResponseEntity<Order>(order,HttpStatus.ACCEPTED);
    }

    @PutMapping("/{orderId}/deliver")
    public ResponseEntity<Order> deliveredOrderHandler(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws OrderException{
        Order order=orderService.deliveredOrder(orderId);
        return new ResponseEntity<Order>(order,HttpStatus.ACCEPTED);
    }

    @PutMapping("/{orderId}/cancel")
    public ResponseEntity<Order> canceledOrderHandler(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws OrderException{
        Order order=orderService.cancelOrder(orderId);
        return new ResponseEntity<Order>(order,HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{orderId}/delete")
    public ResponseEntity<ApiResponse> deleteOrderHandler(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws OrderException{
        orderService.deleteOrder(orderId);
        ApiResponse res=new ApiResponse("Order Deleted Successfully",true);
        System.out.println("delete method working....");
        return new ResponseEntity<>(res,HttpStatus.ACCEPTED);
    }

}
