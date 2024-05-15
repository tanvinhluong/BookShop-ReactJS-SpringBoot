package com.bookshop.ecommerce.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookshop.ecommerce.exception.ProductException;
import com.bookshop.ecommerce.exception.UserException;
import com.bookshop.ecommerce.model.Rating;
import com.bookshop.ecommerce.model.User;
import com.bookshop.ecommerce.request.RatingRequest;
import com.bookshop.ecommerce.service.RatingService;
import com.bookshop.ecommerce.service.UserService;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {

    private UserService userService;
    private RatingService ratingServices;

    public RatingController(UserService userService,RatingService ratingService) {
        this.ratingServices=ratingServices;
        this.userService=userService;
        // TODO Auto-generated constructor stub
    }

    @PostMapping("/create")
    public ResponseEntity<Rating> createRatingHandler(@RequestBody RatingRequest req,@RequestHeader("Authorization") String jwt) throws UserException, ProductException{
        User user=userService.findUserProfileByJwt(jwt);
        Rating rating=ratingServices.createRating(req, user);
        return new ResponseEntity<>(rating,HttpStatus.ACCEPTED);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Rating>> getProductsReviewHandler(@PathVariable Long productId) throws ProductException {

        List<Rating> ratings=ratingServices.getProductRating(productId);
        return new ResponseEntity<>(ratings,HttpStatus.OK);
    }
}
