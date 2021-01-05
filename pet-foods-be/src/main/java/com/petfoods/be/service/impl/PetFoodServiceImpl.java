package com.petfoods.be.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.petfoods.be.dto.ComponentiAnaliticiDto;
import com.petfoods.be.dto.FoodDto;
import com.petfoods.be.repository.PetFoodRepository;
import com.petfoods.be.repository.model.ComponentiAnaliticiModel;
import com.petfoods.be.repository.model.FoodModel;
import com.petfoods.be.service.PetFoodService;

@Service
public class PetFoodServiceImpl implements PetFoodService {

	@Autowired 
	private PetFoodRepository petRepo;
	 
	@Override
	public List<FoodModel> getFoods() throws Exception{
		try {
			return petRepo.findAll();
		}catch(Exception  e) {
			throw e;
		}
	}
	
	
	@Override
	@Transactional
	public void insertFood(FoodDto food) throws Exception{
		try {
			//Map foodDto to foodModel
			FoodModel fm = new FoodModel();
			fm.setDescrizione(food.getDescrizione());
			fm.setMarca(food.getMarca());
			fm.setPeso(food.getPeso());
			fm.setPrezzo(food.getPrezzo());
			fm.setUnitaDiMisura(food.getUnitaDiMisura());
			
			List<ComponentiAnaliticiDto> componentiAnaliticiDto = food.getComponentiAnalitici();
				if(componentiAnaliticiDto != null ) {
				List<ComponentiAnaliticiModel> componentiAnaliticiModel = componentiAnaliticiDto.stream().map((cDto)->{
					ComponentiAnaliticiModel cMod = new ComponentiAnaliticiModel();
					cMod.setFood(fm);
					cMod.setNome(cDto.getNome());
					cMod.setNote(cDto.getNote());
					cMod.setValorePercentuale(cDto.getValorePercentuale());
					return cMod;
				})
				.collect(Collectors.toList());
				fm.getComponentiAnalitici().addAll(componentiAnaliticiModel);
			}
			petRepo.save(fm);
		}catch(Exception  e) {
			throw e;
		}
	}
	
	@Override
	public void deleteFood(Long id) {
		try {
			petRepo.deleteById(id);
		}catch(Exception  e) {
			throw e;
		}
	}
}
