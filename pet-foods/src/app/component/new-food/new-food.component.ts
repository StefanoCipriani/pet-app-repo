import { Component, OnInit } from '@angular/core';
import { FoodProps } from 'src/app/model/FoodProps';
import { FoodService } from 'src/app/service/food.service';
import { FoodModel } from './../../model/FoodModel';

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
    let fm = new FoodModel();
    let props : FoodProps[] = [];
    let prop : FoodProps;

    fm.descrizione=form.value.descrizione;
    fm.marca=form.value.marca;
    fm.peso=form.value.peso;
    fm.prezzo=form.value.prezzo;
    fm.unitaDiMisura=form.value.unitaDiMisura;
    prop = new FoodProps('Proteine',form.value.proteine);
    props.push(prop);
    prop = new FoodProps('Grassi',form.value.grassi);
    props.push(prop);
    prop = new FoodProps('Fibra',form.value.fibra);
    props.push(prop);
    prop = new FoodProps('Cenere',form.value.cenere);
    props.push(prop);
    prop = new FoodProps('Umidità',form.value.umidita);
    props.push(prop);
    console.log(form);
    fm.componentiAnalitici = props;
    console.log(fm);
    this.foodService.addFood(fm);
  }
}
