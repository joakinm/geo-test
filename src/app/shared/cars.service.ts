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

  sortByType(type:string){
    let orderedCars = []
    switch(type){
      case 'segment': { 
        orderedCars = this.cars.sort((a,b)=>(a.segment.localeCompare(b.segment)));
        break; 
     } 
     case 'year': { 
      orderedCars = this.cars.sort((a,b)=>a.year -b.year);
      break; 
    } case 'name': { 
      orderedCars = this.cars.sort((a,b)=>(a.name.localeCompare(b.name)));
      break; 
  } 
    }
    this.cars = orderedCars;
    this.CarsChanged.next(this.cars.slice())
    return this.cars;

  }
}
