//import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LetModel } from 'src/app/models/let.model';
import { Injectable, Inject } from '@angular/core';
import { FlightSeatDTO } from 'src/app/models/flightSeatDTO';

@Injectable({
  providedIn: 'root'
})
export class LetService {

  private readonly apiURI = environment.api;

  constructor(private http: HttpClient) { }

  getLetovi() {
    return this.http.get(this.apiURI + 'api/Let/GetSviLetovi');
  }

  postLet(flight: LetModel) {
    console.log(this.apiURI + 'api/Let/DodajLet')
    return this.http.post(this.apiURI + 'api/Let/DodajLet', flight);
  }

  editLet(id, flight: LetModel){
    return this.http.patch(this.apiURI + 'api/Let/IzmijeniLet/' + id, flight);
  }

  deleteLet(id){
    return this.http.delete(this.apiURI + 'api/Let/ObrisiLet/' + id);
  }

  getLet(aviokompanijaId, letId){
    return this.http.get(this.apiURI + 'api/Let/GetLet/' + aviokompanijaId + '/' + letId);
  }

  getFlightDate(from, to, aviokomapnijaId){
    return this.http.get(this.apiURI + 'api/Let/GetFlightDate?from=' + from + '&to=' + to + '&aviokompanijaId=' + aviokomapnijaId)
  }

  getFlights(aviokompanijaId){
    return this.http.get(this.apiURI + 'api/Let/GetLetovi/' + aviokompanijaId)
  }

  rezervisiLet(letId, korisnikId){
    return this.http.get(this.apiURI + 'api/Let/RezervisiLet?letId=' + letId + '&korisnikId=' + korisnikId);
  }

  getRezervisaniLetovi(korisnikId) {
    return this.http.get(this.apiURI + 'api/Let/PrikazRezervisanihLetova?korisnikId=' + korisnikId);
  }

  otkaziLet(letId){
    return this.http.get(this.apiURI + 'api/Let/OtkaziLet?letId=' + letId);
  }

  getFlight(datumVrijemePolaska, destinacija){
    return this.http.get(this.apiURI + 'api/Let/GetFlight/');
  }

  ocijeniLet(letId, ocjena){
    return this.http.post(this.apiURI + 'api/Let/OcijeniLet?letId=' + letId + '&ocjena=' + ocjena, ocjena );
  }

  getLetic(id: number) {
    return this.http.get(this.apiURI + 'api/Let/GetLetic/' + id);
  }

  getReservedFlights(id: number) {
    return this.http.get(this.apiURI + 'api/Let/GetReservedFlights/' + id);
  }

  getSeats(letId){
    return this.http.get(this.apiURI + 'api/Let/GetSeats/' + letId)
  }

  addResevation(seat: FlightSeatDTO) {
    console.log(this.apiURI + 'api/Let/AddSeat')
    return this.http.post(this.apiURI + 'api/Let/AddSeat', seat);
  }

  cancelReservation(id){
    return this.http.delete(this.apiURI + 'api/Let/CancelReservation/' + id);
  }
}
