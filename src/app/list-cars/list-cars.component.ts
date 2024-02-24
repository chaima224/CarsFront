import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarServicesService } from '../shared/services/car-services.service';
import { Cars } from '../Models/Cars';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent implements OnInit {
  cars: Cars[] = [];
  constructor(private router: Router, private carService: CarServicesService) { }

  ngOnInit(): void {
    this.getCars()
  }
  getCars() {
    this.carService.getCarList().subscribe((data) => {
      this.cars = data;
      
    });
  }
  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe((data) => {
      this.getCars();
    });
  }
  confirmDelete(CarId: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this plug!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteCar(CarId);
      }
    });
  }

}
