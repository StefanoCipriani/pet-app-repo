import { Injectable } from "@angular/core";
import { FoodProps } from "src/app/model/FoodProps";
import { FOODS } from "../mocked/foodsMocked";
import { FoodModel } from "../model/FoodModel";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FoodService {
  fm: FoodModel;

  private foods: FoodModel[] = [];

  constructor(private http: HttpClient) {}

  getFoods(): FoodModel[] {
    //this.foods = this.getFoodsMocked()
    this.foods = [];
    this.getFoodsFromDB();
    return this.foods;
  }

  addFood(food: FoodModel) {
    food.id = this.foods.length + 1;
    this.foods.push(food);
  }

  getFoodsFromDB() {
    this.foods = [];
    this.http.get<any>("http://localhost:8080/foods").subscribe((res) => {
      console.log(res.data);
      for (let entry of res.data) {
        this.foods.push(entry);
      }
    });
  }

  getFoodsFromDBSubscriber() {
    return this.http.get<any>("http://localhost:8080/foods");
  }

  getFoodsMocked() {
    return FOODS;
  }
}
