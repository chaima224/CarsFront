import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UpdateCarComponent } from "./update-car.component";

const routes:Routes=[
    {
        path:'',
        component: UpdateCarComponent
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class UpdateCarsRouteModule{}