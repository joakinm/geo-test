import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CarsService } from 'src/app/shared/cars.service';
import { CarDetail } from 'models/car-detail';
import { DataService } from 'src/app/shared/data.service';


@Component({
  selector: 'app-car-details',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarDetailsComponent implements OnInit {
  carDetailed : CarDetail;
  id:number;
  constructor(private data : DataService, private CarServ: CarsService, private routeAct: ActivatedRoute, private route:Router ) { }

  ngOnInit(): void {
    this.routeAct.params.subscribe(
      (params : Params) => {this.id = +params['id'];
      this.data.fetchCarId(this.id).subscribe(carDet => {
        this.carDetailed = carDet;
      })
      ,err=>{return alert(err)};
      });
  }
}
