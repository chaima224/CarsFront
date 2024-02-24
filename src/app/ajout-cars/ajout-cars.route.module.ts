import { RouterModule, Routes } from "@angular/router";
import { AjoutCarsComponent } from "./ajout-cars.component";
import { NgModule } from "@angular/core";

const routes:Routes=[
    {
        path:'',
        component: AjoutCarsComponent
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
export class AjoutCarsRouteModule{}