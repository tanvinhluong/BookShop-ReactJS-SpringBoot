package com.bookshop.ecommerce.service;

import com.bookshop.ecommerce.exception.ProductException;
import com.bookshop.ecommerce.model.Review;
import com.bookshop.ecommerce.model.User;
import com.bookshop.ecommerce.request.ReviewRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ReviewService {
    public Review createReview(ReviewRequest reviewRequest, User user) throws ProductException;
    public List<Review> getAllReview(Long productId);
}
