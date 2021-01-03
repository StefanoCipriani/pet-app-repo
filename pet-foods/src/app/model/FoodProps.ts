export class FoodProps {

  public nome:string;
  public valorePercentuale:number;
  public note:string;

  constructor(nome?:string, valorePercentuale?:number, note?:string){
    this.nome = nome;
    this.valorePercentuale = valorePercentuale;
    this.note = note;
  }

}
