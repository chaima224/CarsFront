import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cars } from 'src/app/Models/Cars';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServicesService {
  private baseApi = 'http://localhost:8084/cars';
  constructor(private http: HttpClient) { }
  saveCars(cars: Cars): Observable<Object> {
    return this.http.post(`${this.baseApi}`, cars);
  }
  getCarList(): Observable<Cars[]> {
    return this.http.get<Cars[]>(`${this.baseApi}`);
  }
  updateCars(id: number, cars: Cars): Observable<Object> {
    return this.http.put(`${this.baseApi}/${id}`, cars);
  }
  getCarById(id: number): Observable<Cars> {
    return this.http.get<Cars>(`${this.baseApi}/${id}`);
  }
  deleteCar(id: number): Observable<Object> {
    return this.http.delete(`${this.baseApi}/${id}`);
  }
}
