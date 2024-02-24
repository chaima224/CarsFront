import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutCarsComponent } from './ajout-cars/ajout-cars.component';
import { ListCarsComponent } from './list-cars/list-cars.component';

const routes: Routes = [
  {
    path: 'AddCars',
    loadChildren: () =>
      import('./ajout-cars/ajout-cars.module').then(
        (_) => _.AjoutCarsModule
      ),
  },
  {
    path: 'listCars',
    component: ListCarsComponent,
  },
  {
    path: 'updateCar/:id',
    loadChildren: () =>
      import('./update-car/update-car.module').then(
        (_) => _.UpdateCarsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
