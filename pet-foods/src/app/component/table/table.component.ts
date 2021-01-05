import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodModel } from 'src/app/model/FoodModel';
import { FoodService } from './../../service/food.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  private foodService : FoodService;
  foods : FoodModel[];

  constructor(foodService : FoodService) {
      this.foodService = foodService;
  }

  ngOnInit() {
    this.foods = [];
    this.getFoods();
  }

  deleteFood(id:number){
    this.foodService.deleteFood(id).subscribe((res) => {
      this.getFoods();
    });

  }

  getFoods(){
    this.foods = [];
    this.foodService.getFoodsFromDBSubscriber().subscribe((res) => {
      for (let entry of res.data) {
        this.foods.push(entry);
      }
    });
  }

  ngOnDestroy(): void {
    //unsubscribre
    //this.foodService.getFoodsFromDBSubscriber()
  }
}
