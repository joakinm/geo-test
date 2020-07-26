import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { CarsService } from './cars.service';
import Car from '../models/car';

@Injectable({providedIn: 'root'})

export class DataService {
  constructor(private http: HttpClient, private carsServ: CarsService) { }

  fetchCars(){
    this.http.get<Car[]>('https://challenge.agenciaego.tech/models')
    .subscribe(car=>{this.carsServ.addCars(car);})
    ,err=>{alert(err)};
  }
}

