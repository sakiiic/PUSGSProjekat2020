import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { VoziloModel } from 'src/app/models/vozilo.model';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { RentacarDTOModel } from 'src/app/models/rentacarDTO.model';

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

  editVozilo(id, vozilo: VoziloModel){
    return this.http.patch(this.apiURI + 'api/Vozilo/IzmijeniVozilo', vozilo);
  }

  deleteVozilo(id){
    return this.http.delete(this.apiURI + 'api/Vozilo/ObrisiVozilo/' + id);
  }

  postRentacarServis(rentacar: RentacarDTOModel){
    return this.http.post(this.apiURI + 'api/RentACar/DodajRentacarServis', rentacar);
  }

  editRentacarServis(id, rentacar: RentacarDTOModel){
    return this.http.patch(this.apiURI + 'api/RentACar/IzmijeniRentacarServis', rentacar);
  }

  deleteRentacarServis(id){
    return this.http.delete(this.apiURI + 'api/RentACar/ObrisiRentacarServis/' + id);
  }

  getRentaCarsForCurrentUser(id){
    return this.http.get(this.apiURI + 'api/RentACar/getRentaCarsForCurrentUser/' + id);
  }
}
