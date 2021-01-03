import { Component, OnInit } from '@angular/core';
import { FoodModel } from 'src/app/model/FoodModel';
import { FoodService } from './../../service/food.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  private foodService : FoodService;
  private foods : FoodModel[];

  constructor(foodService : FoodService) {
      this.foodService = foodService;
  }

  ngOnInit() {
    this.foods = this.foodService.getFoods();
  }

}
