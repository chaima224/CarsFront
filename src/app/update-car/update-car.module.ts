import { FormsModule } from "@angular/forms";


import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UpdateCarComponent } from "./update-car.component";
import { UpdateCarsRouteModule } from "./update-car.route.module";

@NgModule({
    imports: [UpdateCarsRouteModule, FormsModule, CommonModule],
    declarations: [UpdateCarComponent],
  })
  export class UpdateCarsModule {}