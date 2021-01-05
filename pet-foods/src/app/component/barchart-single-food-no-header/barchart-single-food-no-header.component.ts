import { Component, Input, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { Label } from "ng2-charts";
import { FoodModel } from "src/app/model/FoodModel";
import { FoodService } from "src/app/service/food.service";

@Component({
  selector: 'app-barchart-single-food-no-header',
  templateUrl: './barchart-single-food-no-header.component.html',
  styleUrls: ['./barchart-single-food-no-header.component.css']
})
export class BarchartSingleFoodNoHeaderComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  };

  public isLoaded=false;
  @Input('item') item : FoodModel = null;

  private foods: FoodModel[];
  private mappedData: ChartDataSets[] = [];
  private data: any = {};
  private label: string;
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public mapComponenti: any = {};
  public barChartData: ChartDataSets[] = [

  ];

  constructor(foodService: FoodService) {
    this.foods = [];
  }

  ngOnInit(): void {
    this.foods.push(this.item);
    this.mapFoods();
    this.isLoaded=true;
  }

  private mapFoods(){
    this.foods.forEach((f) => {
      this.barChartLabels.push(f.marca + " - " + f.descrizione);
      let sum = 0;
      f.componentiAnalitici.forEach((c) => {
        sum+=c.valorePercentuale;
        if (
          this.mapComponenti[c.nome] == null ||
          this.mapComponenti[c.nome] == undefined
        ) {
          this.mapComponenti[c.nome] = [];
          this.mapComponenti[c.nome].push(c.valorePercentuale);
        } else {
          this.mapComponenti[c.nome].push(c.valorePercentuale);
        }
      });

      if(sum < 100 &&  (this.mapComponenti['Carboidrati'] == null ||  this.mapComponenti['Carboidrati'] == undefined)){
        this.mapComponenti['Carboidrati'] = [];
        this.mapComponenti['Carboidrati'].push(Math.round(( (100-sum) + Number.EPSILON) * 100) / 100);
      }else{
        this.mapComponenti['Carboidrati'].push(Math.round(( (100-sum) + Number.EPSILON) * 100) / 100);
      }
    });

    for (let key in this.mapComponenti) {
      this.barChartData.push({
        label: key,
        data: this.mapComponenti[key],
      });
    }

  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

}
