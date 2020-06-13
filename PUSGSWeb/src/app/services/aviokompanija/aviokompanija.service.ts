import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AviokompanijaDTOModel } from 'src/app/models/aviokompanijaDTO.model';

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

  postAviocompany(aviokompanija: AviokompanijaDTOModel){
    return this.http.post(this.apiURI + 'api/AvioKompanija/DodajAviokompaniju', aviokompanija);
  }

  editAviocompany(id, aviokompanija: any){
    return this.http.patch(this.apiURI + 'api/AvioKompanija/IzmijeniAviokompaniju/' + id, aviokompanija);
  }

  deleteAviocompany(id){
    return this.http.delete(this.apiURI + 'api/AvioKompanija/ObrisiAviokompaniju/' + id);
  }

  getAviocompanyForCurrentUser(id){
    return this.http.get(this.apiURI + 'api/AvioKompanija/GetAviokompanijeForCurrentUser/' + id);
  }

  ocijeniAviokompaniju(id, ocjena){
    return this.http.post(this.apiURI + 'api/AvioKompanija/OcijeniAviokompaniju?id=' + id + '&ocjena=' + ocjena, ocjena );
  }
}
