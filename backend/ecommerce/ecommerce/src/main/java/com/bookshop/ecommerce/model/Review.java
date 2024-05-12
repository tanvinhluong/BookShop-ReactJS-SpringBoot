package com.bookshop.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String review;

    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonIgnore
    private Product product;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private LocalDateTime createAt;

    public Review() {
        // TO DO Auto-generated constructor stub
    }

    public Review(Long id, String review, Product product, User user, LocalDateTime createAt) {
        this.id = id;
        this.review = review;
        this.product = product;
        this.user = user;
        this.createAt = createAt;
    }
}
