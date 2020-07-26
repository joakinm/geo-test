import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './cars/car-details/cars-detail.component';
import { CarsStartComponent } from './cars/cars-start/cars-start.component';


const routes: Routes = [
  {path:'', redirectTo:'/cars', pathMatch:'full'},
  {path: 'cars',component: CarsComponent, children: [
    {path: '', component: CarsStartComponent},
    {path: ':id', component: CarDetailsComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
