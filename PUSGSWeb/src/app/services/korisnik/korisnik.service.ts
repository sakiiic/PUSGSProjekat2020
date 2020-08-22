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

  getAllUsers() {
    return this.http.get(this.apiURI + 'api/Korisnik/GetAllUsers');
  }

}
