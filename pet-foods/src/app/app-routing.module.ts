import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BarChartComponent } from './component/bar-chart/bar-chart.component';
import { HomeComponent } from './component/home/home.component';
import { ManageFoodComponent } from './component/manage-food/manage-food.component';
import { NewFoodComponent } from './component/new-food/new-food.component';

const routes: Routes = [
  {path:'/', component: HomeComponent},
  {path:'new-food', component: NewFoodComponent},
  {path:'manage-food', component: ManageFoodComponent},
  {path:'graphs', component: BarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
