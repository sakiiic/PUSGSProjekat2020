import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { KorisnikModel } from 'src/app/models/korisnik.model';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  private readonly apiURI = environment.api;

  constructor(private http: HttpClient) { }

  getKorisnik(id){
    return this.http.get(this.apiURI + 'api/Korisnik/GetKorisnik/' + id);
  }

  editKorisnik(id, korisnik: KorisnikModel){
    return this.http.patch(this.apiURI + 'api/Korisnik/GetKorisnik/' + id, korisnik);
  }
}
