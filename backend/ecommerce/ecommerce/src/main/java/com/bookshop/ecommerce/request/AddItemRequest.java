package com.bookshop.ecommerce.request;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class AddItemRequest {

    private Long productId;
    private int quantity;
    private Integer price;

}
