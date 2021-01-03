import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { Label } from "ng2-charts";
import { FoodModel } from "src/app/model/FoodModel";
import { FoodService } from "src/app/service/food.service";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"],
})
export class BarChartComponent implements OnInit {
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

  private foodService: FoodService;
  private foods: FoodModel[];
  private mappedData: ChartDataSets[] = [];
  private data: any = {};
  private label: string;
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  /*
  public barChartData: ChartDataSets[] = [
    { data: [65, 15, 30], label: "Proteine" },
    { data: [28, 12, 33], label: "Vitamine" },
    { data: [28, 28, 28], label: "Grassi" },
  ];*/

  public mapComponenti: any = {};

  public barChartData: ChartDataSets[] = [

  ];


  constructor(foodService: FoodService) {
    this.foodService = foodService;
  }

  ngOnInit(): void {
    this.foods = this.foodService.getFoods();
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

    console.log(this.barChartData);
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

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40,
    ];
  }
}
