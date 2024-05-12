package com.bookshop.ecommerce.service;

import com.bookshop.ecommerce.exception.UserException;
import com.bookshop.ecommerce.model.User;

public interface UserService {
    public User findUserById(Long userId) throws UserException;
    public User findUserProfileByJwt(String jwt) throws UserException;
}
