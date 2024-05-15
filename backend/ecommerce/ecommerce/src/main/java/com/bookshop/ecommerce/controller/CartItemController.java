package com.bookshop.ecommerce.controller;

import com.bookshop.ecommerce.exception.CartItemException;
import com.bookshop.ecommerce.exception.UserException;
import com.bookshop.ecommerce.model.CartItem;
import com.bookshop.ecommerce.model.User;
import com.bookshop.ecommerce.response.ApiResponse;
import com.bookshop.ecommerce.service.CartItemService;
import com.bookshop.ecommerce.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart_items")
public class CartItemController {

    private CartItemService cartItemService;
    private UserService userService;

    public CartItemController(CartItemService cartItemService,UserService userService) {
        this.cartItemService=cartItemService;
        this.userService=userService;
    }

    @DeleteMapping("/{cartItemId}")
    public ResponseEntity<ApiResponse>deleteCartItemHandler(@PathVariable Long cartItemId, @RequestHeader("Authorization")String jwt) throws CartItemException, UserException{

        User user=userService.findUserProfileByJwt(jwt);
        cartItemService.removeCartItem(user.getId(), cartItemId);

        ApiResponse res=new ApiResponse("Item Removed From Cart",true);

        return new ResponseEntity<ApiResponse>(res,HttpStatus.ACCEPTED);
    }

    @PutMapping("/{cartItemId}")
    public ResponseEntity<CartItem>updateCartItemHandler(@PathVariable Long cartItemId, @RequestBody CartItem cartItem, @RequestHeader("Authorization")String jwt) throws CartItemException, UserException{

        User user=userService.findUserProfileByJwt(jwt);

        CartItem updatedCartItem =cartItemService.updateCartItem(user.getId(), cartItemId, cartItem);

        //ApiResponse res=new ApiResponse("Item Updated",true);

        return new ResponseEntity<>(updatedCartItem,HttpStatus.ACCEPTED);
    }
}