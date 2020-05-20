import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { VoziloModel } from 'src/app/models/vozilo.model';

@Injectable({
  providedIn: 'root'
})
export class RentACarService {

  private readonly apiURI = environment.api;

  constructor(private http: HttpClient) { }

  getRentACar() {
    return this.http.get(this.apiURI + 'api/RentACar/GetRentACar');
  }

  getRentACarInfo(rentACarId){
    return this.http.get(this.apiURI + 'api/RentACar/GetRentACarInfo/' + rentACarId);
  }

  postVozilo(vozilo: VoziloModel) {
    console.log(this.apiURI + 'api/Vozilo/DodajVozilo')
    return this.http.post(this.apiURI + 'api/Vozilo/DodajVozilo', vozilo);
  }
}
