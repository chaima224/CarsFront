import { Component, OnInit } from '@angular/core';
import { Cars } from '../Models/Cars';
import { Router } from '@angular/router';
import { CarServicesService } from '../shared/services/car-services.service';

@Component({
  selector: 'app-ajout-cars',
  templateUrl: './ajout-cars.component.html',
  styleUrls: ['./ajout-cars.component.scss']
})
export class AjoutCarsComponent implements OnInit {
  cars: Cars = new Cars();
  constructor(  private router: Router, private carservices: CarServicesService) { }

  ngOnInit(): void {
  }
  addCar() {
    this.carservices.saveCars(this.cars).subscribe(
      (data) => {
        // Opération réussie, afficher un message de succès
        alert('Car successfully added!');
      },
      (error) => {
        // Gérer les erreurs éventuelles ici
        console.error('Error while adding car:', error);
        alert('Error while adding car. Please try again.');
      }
    );
  }
  onSubmit() {
    this.addCar();
  }
  
 

}



