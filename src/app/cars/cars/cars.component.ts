import { Component, OnInit } from '@angular/core';
import Car from 'src/app/models/car';
import { DataService } from 'src/app/shared/data.service';
import { CarsService } from 'src/app/shared/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  constructor(private data: DataService,private carsServ:CarsService) {this.carsList = [];}
  carsList : Car[];

  ngOnInit(): void {
    this.data.fetchCars();
    this.carsList = this.carsServ.getCars();
  }
  onGetData(){

  }
}
