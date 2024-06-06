package com.bookshop.ecommerce.facade;

import com.bookshop.ecommerce.exception.ProductException;
import com.bookshop.ecommerce.exception.UserException;
import com.bookshop.ecommerce.model.Cart;
import com.bookshop.ecommerce.model.User;
import com.bookshop.ecommerce.request.AddItemRequest;
import com.bookshop.ecommerce.service.CartService;
import com.bookshop.ecommerce.service.UserService;
import org.springframework.stereotype.Component;

@Component
public class ShoppingFacade {
    private UserService userService;
    private CartService cartService;

    // Contructors
    public ShoppingFacade(UserService userService, CartService cartService) {
        this.userService = userService;
        this.cartService = cartService;
    }

    public User getUserByJwt(String jwt) throws UserException {
        return userService.findUserProfileByJwt(jwt);
    }

    public Cart getUserCart(Long userId) throws ProductException {
        return cartService.findUserCart(userId);
    }

    public void addItemToCart(Long userId, AddItemRequest req) throws ProductException {
        cartService.addToCartItem(userId, req);
    }
}
