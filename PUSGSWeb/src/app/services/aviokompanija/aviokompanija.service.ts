import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AviokompanijaService {

  private readonly apiURI = environment.api;

  constructor(private http: HttpClient) { }

  getAviokompanija() {
    return this.http.get(this.apiURI + 'api/AvioKompanija/GetAviokompanija');
 }

  getAviokompanijaInfo(aviokompanijaId){
    return this.http.get(this.apiURI + 'api/Aviokompanija/GetAviokompanijaInfo/' + aviokompanijaId);
  }
}
