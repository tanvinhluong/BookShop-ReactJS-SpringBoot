package com.bookshop.ecommerce.service;

import com.bookshop.ecommerce.model.Category;
import org.springframework.stereotype.Service;

import java.util.List;


public interface CategoryService {
    public Category findParentCategoryById(Long categoryId);

    public List<Category> findAllCategory();
}
