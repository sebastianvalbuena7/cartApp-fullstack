package com.sebastian.backend.cartapp.cartapp.repositories;

import com.sebastian.backend.cartapp.cartapp.models.entities.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
}
