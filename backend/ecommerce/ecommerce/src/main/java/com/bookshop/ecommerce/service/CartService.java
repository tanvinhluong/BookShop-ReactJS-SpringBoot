package com.bookshop.ecommerce.service;

import com.bookshop.ecommerce.exception.ProductException;
import com.bookshop.ecommerce.model.Cart;
import com.bookshop.ecommerce.model.User;
import com.bookshop.ecommerce.request.AddItemRequest;

public interface CartService {
    public Cart createCart(User user);
    public String addToCartItem(Long UserId, AddItemRequest addItemRequest) throws ProductException;
    public Cart findUserCart(Long userId);
}
