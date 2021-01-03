import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {

  foodService: FoodService;
  defaultUnitaMisura = 'g';

  constructor(foodService: FoodService) {
    this.foodService = foodService;
  }

  ngOnInit() {
  }

  onSubmit(form){
    if(form.invalid){
      alert("Compilare tutti i campi!!!");
      return;
    }
    console.log(form);
  }
}
