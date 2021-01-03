import { Component, OnInit } from '@angular/core';
import { FoodService } from './../../service/food.service';

@Component({
  selector: 'app-manage-food',
  templateUrl: './manage-food.component.html',
  styleUrls: ['./manage-food.component.css']
})
export class ManageFoodComponent implements OnInit {

  private foodService: FoodService;
  private foods = [];

  constructor(foodService: FoodService) {
    this.foodService = foodService;
  }

  ngOnInit() {
    this.getFoods();
    console.log(this.foods);
  }

  getFoods(){
    this.foods = this.foodService.getFoods();
  }
}
