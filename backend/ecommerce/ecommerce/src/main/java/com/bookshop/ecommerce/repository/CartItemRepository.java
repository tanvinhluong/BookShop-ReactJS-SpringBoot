package com.bookshop.ecommerce.repository;

import com.bookshop.ecommerce.model.Cart;
import com.bookshop.ecommerce.model.CartItem;
import com.bookshop.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem,Long> {

    @Query("SELECT ci FROM CartItem ci WHERE ci.cart=:cart AND ci.product=:product AND ci.userId=:userId")
    public CartItem isCartItemExists(
            @Param("cart") Cart cart,
            @Param("product")Product product,
            @Param("userId") Long userId
    );
}
