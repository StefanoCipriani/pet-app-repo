package com.petfoods.be.service;

import java.util.List;

import com.petfoods.be.dto.FoodDto;
import com.petfoods.be.repository.model.FoodModel;

public interface PetFoodService {

	List<FoodModel> getFoods() throws Exception;
	void insertFood(FoodDto food) throws Exception;

}
