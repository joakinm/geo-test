import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CarsComponent } from './cars/cars.component';
import { CarItemComponent } from './cars/car-item/car-item.component';
import { CarDetailsComponent } from './cars/car-details/cars-detail.component';
import { CarsStartComponent } from './cars/cars-start/cars-start.component';
import { HeaderComponent } from './header/header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarItemComponent,
    CarDetailsComponent,
    CarsStartComponent,
    HeaderComponent,
    DropdownDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
