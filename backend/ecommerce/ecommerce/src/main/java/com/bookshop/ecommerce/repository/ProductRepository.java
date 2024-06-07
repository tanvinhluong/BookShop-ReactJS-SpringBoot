package com.bookshop.ecommerce.repository;

import com.bookshop.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p From Product p Where LOWER(p.category.name)=:category")
    public List<Product> findByCategory(@Param("category") String category);

    @Query("SELECT p From Product p where LOWER(p.title) Like %:query% OR LOWER(p.description) Like %:query% OR LOWER(p.brand) LIKE %:query% OR LOWER(p.category.name) LIKE %:query%")
    public List<Product> searchProduct(@Param("query")String query);

    // SELECT p From Product p Where LOWER(p.category.name)=:category
    // SELECT c From Product c Where p.parent_category_id = c.id WHERE c.category.name =:parentcategory
    @Query("SELECT p FROM Product p " +
            "JOIN p.category c " +
            "LEFT JOIN c.parentCategory pc " +
            "WHERE (c.name = :category OR :category = '') " +
            "AND (pc.name = :parentCategoryName OR :parentCategoryName = '')")
    public List<Product> findByParentCategory(@Param("category") String category, @Param("parentCategoryName") String parentCategory);


    @Query("SELECT p FROM Product p " +
            "WHERE (p.category.name = :category OR :category = '') " +
            "AND ((:minPrice IS NULL AND :maxPrice IS NULL) OR (p.discountPrice BETWEEN :minPrice AND :maxPrice)) " +
            "AND (:minDiscount IS NULL OR p.discountPersent >= :minDiscount) " +
            "ORDER BY " +
            "CASE WHEN :sort = 'price_low' THEN p.discountPrice END ASC, " +
            "CASE WHEN :sort = 'price_high' THEN p.discountPrice END DESC")
    List<Product> filterProducts(
            @Param("category") String category,
            @Param("minPrice") Integer minPrice,
            @Param("maxPrice") Integer maxPrice,
            @Param("minDiscount") Integer minDiscount,
            @Param("sort") String sort
    );
}
