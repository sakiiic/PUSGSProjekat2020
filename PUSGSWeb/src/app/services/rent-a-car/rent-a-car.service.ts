import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentACarService {

  private readonly apiURI = environment.api;

  constructor(private http: HttpClient) { }

  getRentACar() {
    return this.http.get(this.apiURI + 'api/RentACar/GetRentACar');
 }
}
