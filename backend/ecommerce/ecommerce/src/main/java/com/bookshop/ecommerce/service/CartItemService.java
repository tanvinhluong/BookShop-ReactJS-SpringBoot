package com.bookshop.ecommerce.service;

import com.bookshop.ecommerce.exception.CartItemException;
import com.bookshop.ecommerce.exception.UserException;
import com.bookshop.ecommerce.model.Cart;
import com.bookshop.ecommerce.model.CartItem;
import com.bookshop.ecommerce.model.Product;

public interface CartItemService{
    public CartItem createCartItem(CartItem cartItem);
    public CartItem updateCartItem(Long userId,Long id,CartItem cartItem)
            throws CartItemException, UserException;
    public void deleteCartItem(Long cartItemId);

    public CartItem isCartItemExists(Cart cart, Product product,Long userId);

    public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException;
    public CartItem findCartItemById(Long cartItemId) throws CartItemException;
}
