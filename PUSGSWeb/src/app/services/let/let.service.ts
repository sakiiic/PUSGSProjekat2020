import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LetService {

  private readonly apiURI = environment.api;

  constructor(private http: HttpClient) { }

  getLetovi() {
    return this.http.get(this.apiURI + 'api/Let/GetLetovi');
 }
}
