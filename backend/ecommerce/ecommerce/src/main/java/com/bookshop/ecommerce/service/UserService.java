package com.bookshop.ecommerce.service;

import com.bookshop.ecommerce.exception.UserException;
import com.bookshop.ecommerce.model.User;

import java.util.List;

public interface UserService {
    public User findUserById(Long userId) throws UserException;
    public User findUserProfileByJwt(String jwt) throws UserException;
    public List<User> getAllUser();
}
