package com.bookshop.ecommerce.controller;

import com.bookshop.ecommerce.exception.UserException;
import com.bookshop.ecommerce.model.User;
import com.bookshop.ecommerce.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {


    private UserService userService;

    public UserController(UserService userService) {
        this.userService=userService;
    }

    @GetMapping("/")
    public ResponseEntity<List<User>> getAllusersHandler(){
        List<User> users= userService.getAllUser();

        return new ResponseEntity<>(users, HttpStatus.ACCEPTED);
    }

    @GetMapping("/profile")
    public ResponseEntity<User> getUserProfileHandler(@RequestHeader("Authorization") String jwt) throws UserException{

        System.out.println("/api/users/profile");
        User user=userService.findUserProfileByJwt(jwt);
        return new ResponseEntity<User>(user,HttpStatus.ACCEPTED);
    }

}
