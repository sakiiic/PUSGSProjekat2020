import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LetModel } from 'src/app/models/let.model';

@Injectable({
  providedIn: 'root'
})
export class LetService {

  private readonly apiURI = environment.api;

  constructor(private http: HttpClient) { }

  getLetovi() {
    return this.http.get(this.apiURI + 'api/Let/GetLetovi');
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

}
