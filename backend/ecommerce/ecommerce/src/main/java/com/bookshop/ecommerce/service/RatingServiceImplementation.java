package com.bookshop.ecommerce.service;

import com.bookshop.ecommerce.exception.ProductException;
import com.bookshop.ecommerce.model.Product;
import com.bookshop.ecommerce.model.Rating;
import com.bookshop.ecommerce.model.User;
import com.bookshop.ecommerce.repository.RatingRepository;
import com.bookshop.ecommerce.request.RatingRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingServiceImplementation implements RatingService{

    @Autowired
    private RatingRepository ratingRepository;
    @Autowired
    ProductService productService;
    @Override
    public Rating createRating(RatingRequest ratingRequest, User user) throws ProductException {
        Product product = productService.findProductById(ratingRequest.getProductId());
        Rating rating = new Rating();
        rating.setProduct(product);
        rating.setUser(user);
        rating.setRating(ratingRequest.getRating());
        return ratingRepository.save(rating);
    }

    @Override
    public List<Rating> getProductRating(Long productId) throws ProductException {
        return ratingRepository.getAllProductsRating(productId);
    }
}
