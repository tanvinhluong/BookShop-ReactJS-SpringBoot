package com.bookshop.ecommerce.service;

import com.bookshop.ecommerce.exception.CartItemException;
import com.bookshop.ecommerce.exception.UserException;
import com.bookshop.ecommerce.model.Cart;
import com.bookshop.ecommerce.model.CartItem;
import com.bookshop.ecommerce.model.Product;
import com.bookshop.ecommerce.model.User;
import com.bookshop.ecommerce.repository.CartItemRepository;
import com.bookshop.ecommerce.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartItemServiceImplementation implements CartItemService{

    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private CartRepository cartRepository;
    @Override
    public CartItem createCartItem(CartItem cartItem) {
        cartItem.setQuantity(1);
        cartItem.setPrice(cartItem.getProduct().getPrice() * cartItem.getQuantity());
        cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountPrice() * cartItem.getQuantity());
        CartItem newCartItem = cartItemRepository.save(cartItem);
        return newCartItem;
    }

    @Override
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
        CartItem item = findCartItemById(id);
        User user = userService.findUserById(item.getUserId());
        if(user.getId() != userId){
            throw new UserException("User id not matched");
        }
        item.setQuantity(cartItem.getQuantity());
        item.setPrice(item.getQuantity() * item.getProduct().getPrice());
        item.setDiscountedPrice(item.getQuantity() * item.getProduct().getDiscountPrice());
        return cartItemRepository.save(item);

    }

    @Override
    public void deleteCartItem(Long cartItemId) {

    }

    @Override
    public CartItem isCartItemExists(Cart cart, Product product, Long userId) {
        CartItem cartItem = cartItemRepository.isCartItemExists(cart,product ,userId);
        return cartItem;
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {
        CartItem cartItem = findCartItemById(cartItemId);
        User user = userService.findUserById(cartItem.getUserId());
        User requestedUser = userService.findUserById(userId);
        if(user.getId().equals(requestedUser.getId())) {
            cartItemRepository.deleteById(cartItemId);
        }
        else{
            throw new UserException("you cant remove another user item");
        }
    }

    @Override
    public CartItem findCartItemById(Long cartItemId) throws CartItemException {
        Optional<CartItem> cartItem = cartItemRepository.findById(cartItemId);
        if(cartItem.isPresent()){
            return cartItem.get();
        }
        else{
            throw new CartItemException("Cart item not found");
        }

    }
}
