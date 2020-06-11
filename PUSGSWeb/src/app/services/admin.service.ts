import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserRegister } from '../models/userRegister';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.api + 'api/authorization/';

  constructor(private http: HttpClient) { }

  registerAviocompany(user: UserRegister) {
    return this.http.post(this.baseUrl + 'aviocompanyAdmin', user);
  }

  registerRentacar(user: UserRegister) {
    console.log('doslo')
    return this.http.post(this.baseUrl + 'rentacarAdmin', user);
  }
}
