import { Injectable } from '@angular/core';
import { FoodProps } from 'src/app/model/FoodProps';
import { FOODS } from '../mocked/foodsMocked';
import { FoodModel } from '../model/FoodModel';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  fm:FoodModel;

  private foods : FoodModel[] = [];

  getFoods() : FoodModel[]{
    this.foods = FOODS;
    return this.foods;
  }

  addFood(food:FoodModel){
    food.id = this.foods.length + 1;
    this.foods.push(food);
  }
  constructor() { }
}
