package com.petfoods.be.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petfoods.be.repository.model.FoodModel;

public interface PetFoodRepository extends JpaRepository<FoodModel, Long>{

	
}


