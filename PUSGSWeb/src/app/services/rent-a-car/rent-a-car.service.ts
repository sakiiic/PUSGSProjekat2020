import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { VoziloModel } from 'src/app/models/vozilo.model';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { RentacarDTOModel } from 'src/app/models/rentacarDTO.model';
import { KorisnikVozilo } from 'src/app/models/korisnikVozilo.model';

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
    console.log(id)
    return this.http.patch(this.apiURI + 'api/Vozilo/IzmijeniVozilo/' + id, vozilo);
  }

  deleteVozilo(id){
    return this.http.delete(this.apiURI + 'api/Vozilo/ObrisiVozilo/' + id);
  }

  postRentacarServis(rentacar: RentacarDTOModel){
    return this.http.post(this.apiURI + 'api/RentACar/DodajRentacarServis', rentacar);
  }

  editRentacarServis(id, rentacar: any){
    return this.http.patch(this.apiURI + 'api/RentACar/IzmijeniRentacarServis/' + id, rentacar);
  }

  deleteRentacarServis(id){
    return this.http.delete(this.apiURI + 'api/RentACar/ObrisiRentacarServis/' + id);
  }

  getRentaCarsForCurrentUser(id){
    return this.http.get(this.apiURI + 'api/RentACar/getRentaCarsForCurrentUser/' + id);
  }

  getVozilo(rentacarId, voziloId){
    return this.http.get(this.apiURI + 'api/Vozilo/GetVozilo/' + rentacarId + '/' + voziloId);
  }

  getVozilaDate(from, to, rentacarId){
    return this.http.get(this.apiURI + 'api/Vozilo/GetVozilaDatum?from=' + from + '&to=' + to + '&rentacarId=' + rentacarId)
  }

  getVozila(rentacarId){
    return this.http.get(this.apiURI + 'api/Vozilo/GetVozila/' + rentacarId)
  }

  rezervisiVozilo(voziloId, korisnikId){
    return this.http.get(this.apiURI + 'api/Vozilo/RezervisiVozilo?voziloId=' + voziloId + '&korisnikId=' + korisnikId);
  }

  getRezervisanaVozila(korisnikId) {
    return this.http.get(this.apiURI + 'api/Vozilo/PrikazRezervisanih?korisnikId=' + korisnikId);
  }

  otkaziRezervaciju(voziloId){
    return this.http.get(this.apiURI + 'api/Vozilo/OtkaziRezervaciju?voziloId=' + voziloId);
  }

  dodajVoziloKorisniku(objekat: KorisnikVozilo) {
    console.log('servis')
    return this.http.post(this.apiURI + 'api/Vozilo/KorisnikVozilo', objekat);
  }

  ocijeniVozilo(voziloId, ocjena){
    console.log(ocjena, 'eee')
    return this.http.post(this.apiURI + 'api/Vozilo/OcijeniVozilo?voziloId=' + voziloId + '&ocjena=' + ocjena, ocjena)
  }

  ocijeniServis(rentacarId, ocjena){
    return this.http.post(this.apiURI + 'api/RentACar/OcijeniServis?rentacarId=' + rentacarId + '&ocjena=' + ocjena, ocjena)
  }
}
