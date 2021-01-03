import { FoodModel } from "src/app/model/FoodModel";

export const FOODS: FoodModel[] = [
  {
    id:1,
    marca:"Monge Natural",
    descrizione:"Tonno con fegatini di pollo",
    prezzo:1,
    peso:80,
    unitaDiMisura: "g",
    ingredienti : [
      {
        nome : "Tonno",
        valorePercentuale:45,
        note:""
      },
      {
        nome : "Fegatini di pollo",
        valorePercentuale:5,
        note:""
      }
    ],
    componentiAnalitici:[
      {
        nome:"Proteine",
        valorePercentuale:12,
        note:"Grezze"
      },
      {
        nome:"Grassi",
        valorePercentuale:1,
        note:"Grassi e Oli grezzi"
      },
      {
        nome:"Fibra",
        valorePercentuale:1,
        note:"Fibra Grezza"
      },
      {
        nome:"Ceneri",
        valorePercentuale:2,
        note:"Ceneri Grezze"
      },
      {
        nome:"Umidità",
        valorePercentuale:83,
        note:""
      }
    ]

  },
  {
    id:2,
    marca:"Almo",
    descrizione:"Tonno e sogliola",
    prezzo:1,
    peso:80,
    unitaDiMisura: "g",
    ingredienti : [
      {
        nome : "Tonno",
        valorePercentuale:10,
        note:""
      },
      {
        nome : "Fegatini di pollo",
        valorePercentuale:10,
        note:""
      }
    ],
    componentiAnalitici:[
      {
        nome:"Proteine",
        valorePercentuale:13,
        note:"Grezze"
      },
      {
        nome:"Grassi",
        valorePercentuale:0.3,
        note:"Grassi e Oli grezzi"
      },
      {
        nome:"Fibra",
        valorePercentuale:0.1,
        note:"Fibra Grezza"
      },
      {
        nome:"Ceneri",
        valorePercentuale:1,
        note:"Ceneri Grezze"
      },
      {
        nome:"Umidità",
        valorePercentuale:83,
        note:""
      }
    ]
  },
  {
    id:3,
    marca:"Marca Test 2 ",
    descrizione:"Test 2",
    prezzo:1,
    peso:80,
    unitaDiMisura: "g",
    ingredienti : [
      {
        nome : "Tonno",
        valorePercentuale:10,
        note:""
      },
      {
        nome : "Fegatini di pollo",
        valorePercentuale:10,
        note:""
      }
    ],
    componentiAnalitici:[
      {
        nome:"Proteine",
        valorePercentuale:10,
        note:"Grezze"
      },
      {
        nome:"Grassi",
        valorePercentuale:10,
        note:"Grassi e Oli grezzi"
      },
      {
        nome:"Fibra",
        valorePercentuale:10,
        note:"Fibra Grezza"
      },
      {
        nome:"Ceneri",
        valorePercentuale:10,
        note:"Ceneri Grezze"
      },
      {
        nome:"Umidità",
        valorePercentuale:60,
        note:""
      }
    ]

  }
];
