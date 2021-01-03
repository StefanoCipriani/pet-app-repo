import { FoodProps } from 'src/app/model/FoodProps';

export class FoodModel {

  id:number;
  marca:string;
  descrizione:string;
  prezzo: number;
  peso:number;
  unitaDiMisura:string;
  ingredienti : FoodProps[];
  componentiAnalitici: FoodProps[];

  constructor(id?:number, marca?:string,descrizione?:string, prezzo?:number, peso? : number, unitaDiMisura?:string,
    ingredienti?:FoodProps[],componentiAnalitici?: FoodProps[])
  {
    this.id = id;
    this.marca = marca;
    this.descrizione = descrizione;
    this.prezzo = prezzo;
    this.peso = peso;
    this.unitaDiMisura = unitaDiMisura;
    this.ingredienti=ingredienti;
    this.componentiAnalitici=componentiAnalitici;
  }
}
