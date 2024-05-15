package com.bookshop.ecommerce.service;

import com.bookshop.ecommerce.exception.ProductException;
import com.bookshop.ecommerce.model.Rating;
import com.bookshop.ecommerce.model.User;
import com.bookshop.ecommerce.request.RatingRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RatingService {
    public Rating createRating(RatingRequest ratingRequest, User user) throws ProductException;
    public List<Rating> getProductRating(Long productId) throws ProductException;
}
