import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import Car from '../models/car';
import { CarDetail } from '../models/car-detail';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }
  CarsChanged = new Subject<Car[]>();
  carDetailChanged = new Subject<CarDetail>();
  private cars: Car[] = [];
  private carDetails: CarDetail;

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
