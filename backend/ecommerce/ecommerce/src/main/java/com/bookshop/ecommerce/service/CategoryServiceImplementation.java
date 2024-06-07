package com.bookshop.ecommerce.service;

import com.bookshop.ecommerce.model.Category;
import com.bookshop.ecommerce.repository.CartRepository;
import com.bookshop.ecommerce.repository.CategoryRepository;
import com.bookshop.ecommerce.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImplementation implements CategoryService {

    private CategoryRepository categoryRepository;
    public CategoryServiceImplementation(CategoryRepository categoryRepository) {
        this.categoryRepository=categoryRepository;
    }

    @Override
    public Category findParentCategoryById(Long categoryId){
            Category category = categoryRepository.findParentCategoryById(categoryId);

            return  category;
    };

    @Override
    public List<Category> findAllCategory(){
        List<Category> categoryList = categoryRepository.findAll();

        return categoryList;
    }
}
