package com.sebastian.backend.cartapp.cartapp.services.Impl;

import com.sebastian.backend.cartapp.cartapp.models.entities.Product;
import com.sebastian.backend.cartapp.cartapp.repositories.ProductRepository;
import com.sebastian.backend.cartapp.cartapp.services.ProductService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> findAll() {
        return (List<Product>) productRepository.findAll();
    }
}