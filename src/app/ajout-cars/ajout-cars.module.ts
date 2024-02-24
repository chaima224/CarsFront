import { FormsModule } from "@angular/forms";
import { AjoutCarsRouteModule } from "./ajout-cars.route.module";
import { AjoutCarsComponent } from "./ajout-cars.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [AjoutCarsRouteModule, FormsModule, CommonModule],
    declarations: [AjoutCarsComponent],
  })
  export class AjoutCarsModule {}