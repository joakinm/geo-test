import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import Car from '../models/car';
import { CarDetail } from '../models/car-detail';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }
  CarsChanged = new Subject<Car[]>()
  private cars: Car[] = [];
  private cardetails: CarDetail[] = [];

  //----------GET
  getCars(){
    return this.cars.slice();
  }

  //----------ADD
  addCars(cars:Car[]){
    this.cars = cars;
    this.CarsChanged.next(this.cars.slice());
  }

}
