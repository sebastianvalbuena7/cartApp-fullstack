package com.sebastian.backend.cartapp.cartapp.services;

import com.sebastian.backend.cartapp.cartapp.models.entities.Product;

import java.util.List;

public interface ProductService {
    List<Product> findAll();
}
