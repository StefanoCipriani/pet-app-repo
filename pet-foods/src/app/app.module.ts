import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { NewFoodComponent } from './component/new-food/new-food.component';
import { ManageFoodComponent } from './component/manage-food/manage-food.component';
import { TableComponent } from './component/table/table.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './component/bar-chart/bar-chart.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewFoodComponent,
    ManageFoodComponent,
    TableComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
