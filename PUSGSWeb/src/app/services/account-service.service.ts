import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  constructor(private http: HttpClient) { }
//properties needed
  private baseUrlLogin = environment.api + 'api/Account/Login';
//communicate with web api
  Login(userData) {
    return this.http.post<any>(this.baseUrlLogin, userData).pipe(
      map(result => {
if (result.message != null) {
          console.log('We sent a message to our Controller API. It       works');
        }
        return result;
        })
      );
  }
}
