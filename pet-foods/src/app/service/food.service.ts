import { Injectable } from "@angular/core";
import { FoodProps } from "src/app/model/FoodProps";
import { FOODS } from "../mocked/foodsMocked";
import { FoodModel } from "../model/FoodModel";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class FoodService {
  fm: FoodModel;

  private foods: FoodModel[] = [];
  private baseUrl:string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getFoods(): FoodModel[] {
    this.foods = [];
    this.getFoodsFromDB();
    //this.foods = this.getFoodsMocked()
    return this.foods;
  }

  addFood(food: FoodModel) {
    this.http.post<FoodModel>(this.baseUrl+"/foods", food)
    .subscribe((res) => {
      console.log(res);
    });
  }

  deleteFood(id:number) {
    return this.http.delete(this.baseUrl+"/foods/"+id);
  }

  getFoodsFromDB() {
    this.foods = [];
    this.http.get<any>(this.baseUrl+"/foods").subscribe((res) => {
      console.log(res.data);
      for (let entry of res.data) {
        this.foods.push(entry);
      }
    });
  }

  getFoodsFromDBSubscriber() {
    return this.http.get<any>(this.baseUrl+"/foods");
  }

  getFoodsMocked() {
    return FOODS;
  }
}
