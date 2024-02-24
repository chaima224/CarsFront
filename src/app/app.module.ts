import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutCarsComponent } from './ajout-cars/ajout-cars.component';
import { AjoutCarsModule } from './ajout-cars/ajout-cars.module';
import { HttpClientModule } from '@angular/common/http';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { UpdateCarsModule } from './update-car/update-car.module';

@NgModule({
  declarations: [
    AppComponent,
    ListCarsComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AjoutCarsModule,
    HttpClientModule,
    UpdateCarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
