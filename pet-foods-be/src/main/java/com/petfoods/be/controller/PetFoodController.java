package com.petfoods.be.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.petfoods.be.dto.FoodDto;
import com.petfoods.be.exception.dto.BaseDto;
import com.petfoods.be.exception.dto.Utils;
import com.petfoods.be.repository.model.FoodModel;
import com.petfoods.be.service.PetFoodService;

@RestController
public class PetFoodController {

	private String sampleFoodJson =" {\r\n"
			+ "    \"marca\":\"Monge Natural\",\r\n"
			+ "    \"descrizione\":\"Tonno con fegatini di pollo\",\r\n"
			+ "    \"prezzo\":1,\r\n"
			+ "    \"peso\":80,\r\n"
			+ "    \"unitaDiMisura\": \"g\",\r\n"
			+ "    \"componentiAnalitici\":[\r\n"
			+ "      {\r\n"
			+ "        \"nome\":\"Proteine\",\r\n"
			+ "        \"valorePercentuale\":12,\r\n"
			+ "        \"note\":\"Grezze\"\r\n"
			+ "      },\r\n"
			+ "      {\r\n"
			+ "        \"nome\":\"Grassi\",\r\n"
			+ "        \"valorePercentuale\":1,\r\n"
			+ "        \"note\":\"Grassi e Oli grezzi\"\r\n"
			+ "      },\r\n"
			+ "      {\r\n"
			+ "        \"nome\":\"Fibra\",\r\n"
			+ "        \"valorePercentuale\":1,\r\n"
			+ "        \"note\":\"Fibra Grezza\"\r\n"
			+ "      },\r\n"
			+ "      {\r\n"
			+ "        \"nome\":\"Ceneri\",\r\n"
			+ "        \"valorePercentuale\":2,\r\n"
			+ "        \"note\":\"Ceneri Grezze\"\r\n"
			+ "      },\r\n"
			+ "      {\r\n"
			+ "        \"nome\":\"Umidità\",\r\n"
			+ "        \"valorePercentuale\":83,\r\n"
			+ "        \"note\":\"\"\r\n"
			+ "      }\r\n"
			+ "    ]\r\n"
			+ "\r\n"
			+ "  }";

	@Autowired
	private PetFoodService petFoodService;
	
	@GetMapping("test")
	public ResponseEntity<String> testController(){
		return new ResponseEntity<String>("daje!", HttpStatus.OK);
	}
	
	@GetMapping("foods")
	public ResponseEntity<BaseDto<List<FoodModel>>> getFoods() throws Exception{
		BaseDto<List<FoodModel>> res = new BaseDto<>();
		Utils.populateDto(res, petFoodService.getFoods(), HttpStatus.OK);
		return ResponseEntity.ok(res);
	}
	
	@PostMapping("foods")
	public ResponseEntity<BaseDto<String>> insertFood(@RequestBody FoodDto food) throws Exception{
		petFoodService.insertFood(food);
		return ResponseEntity.ok(null);
	}
	
	@PostMapping("foods/array")
	public ResponseEntity<BaseDto<String>> insertFoodArray(@RequestBody List<FoodDto> foods) throws Exception{
		for(FoodDto fDto : foods)
		 petFoodService.insertFood(fDto);
		return ResponseEntity.ok(null);
	}
	
	@DeleteMapping("foods/{id}")
	public ResponseEntity<BaseDto<String>> deleteFood(@PathVariable Long id) throws Exception{
		petFoodService.deleteFood(id);
		return ResponseEntity.ok(null);
	}
}
