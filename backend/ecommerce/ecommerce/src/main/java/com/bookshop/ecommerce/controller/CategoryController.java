package com.bookshop.ecommerce.controller;

import com.bookshop.ecommerce.exception.CategoryException;
import com.bookshop.ecommerce.exception.ProductException;
import com.bookshop.ecommerce.model.Category;
import com.bookshop.ecommerce.model.Product;


import com.bookshop.ecommerce.service.CategoryService;
import com.bookshop.ecommerce.service.OrderService;
import com.bookshop.ecommerce.service.ProductService;
import com.bookshop.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/category")
public class CategoryController {

    private CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService=categoryService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Category>> findAllCategory() throws CategoryException {
        List<Category> res = categoryService.findAllCategory();
        return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
    }

    @GetMapping("/{categoryId}")
    public ResponseEntity<Category> findParentCategoryById(@PathVariable Long categoryId) throws CategoryException {
        Category res = categoryService.findParentCategoryById(categoryId);
        return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
    }
}
