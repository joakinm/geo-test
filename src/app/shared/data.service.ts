import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { CarsService } from './cars.service';
import Car from '../models/car';
import { CarDetail } from 'models/car-detail';

@Injectable({providedIn: 'root'})

export class DataService {
  constructor(private http: HttpClient, private carsServ: CarsService) { }
  url :string = "https://challenge.agenciaego.tech/models";

  fetchCars(){
    this.http.get<Car[]>(this.url)
    .subscribe(car=>{this.carsServ.addCars(car);})
    ,err=>{alert(err)};
  }

  fetchCarId(id: number){
   return this.http.get<CarDetail>(this.url+'/'+id);
    
    
  }
}

