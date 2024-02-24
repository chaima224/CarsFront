import { Component, OnInit } from '@angular/core';
import { Cars } from '../Models/Cars';
import { ActivatedRoute, Router } from '@angular/router';
import { CarServicesService } from '../shared/services/car-services.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.scss']
})
export class UpdateCarComponent implements OnInit {
  cars: Cars[] = [];
  id!: number;
  car: Cars = new Cars();
  constructor( private router: ActivatedRoute, private carService: CarServicesService,     private route: Router) { }

  ngOnInit(): void {
    // Convert the id parameter to number
    this.id = Number(this.router.snapshot.params['id']);
    this.carService.getCarById(this.id).subscribe((data) => {
      this.car = data;
    });
  }
  onSubmit() {
    this.carService.updateCars(this.id, this.car).subscribe((data) => {
      this.goToCarsList();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'success',
        title: ' Car Updated successfully',
      });
    });
  }

  goToCarsList() {
    this.route.navigate(['/listCars']);
  }

}
