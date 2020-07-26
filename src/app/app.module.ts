import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CarsComponent } from './cars/cars.component';
import { CarItemComponent } from './cars/car-item/car-item.component';
import { CarDetailsComponent } from './cars/car-details/cars-detail.component';
import { CarsStartComponent } from './cars/cars-start/cars-start.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarItemComponent,
    CarDetailsComponent,
    CarsStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
