import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserRegister } from 'src/app/models/userRegister';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = environment.api + 'api/authorization/';
jwtHelper = new JwtHelperService();
decodedToken: any;
currentUser: any;
userRoles: any;

constructor(private http: HttpClient) { }

  register(user: UserRegister) {
    return this.http.post(this.baseUrl + 'register', user);
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          this.currentUser = user.user;
          this.userRoles = this.decodedToken.role as Array<string>;
        }
      })
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token != null) {
      this.decodedToken = this.jwtHelper.decodeToken(token);
      this.currentUser = JSON.parse(user);
      this.userRoles = this.decodedToken.role as Array<string>;
    }
    return !this.jwtHelper.isTokenExpired(token);
    // return true;
  }

  isAdmin() {
    if (this.userRoles != null) {
      const result = this.userRoles.includes('Admin');
      return result;
    }
    return false;
  }

  isAviocompanyAdmin() {
    if (this.userRoles != null) {
      const result = this.userRoles.includes('AviocompanyAdmin');
      return result;
    }
    return false;
  }

  isRentacarAdmin() {
    if (this.userRoles != null) {
      const result = this.userRoles.includes('RentacarAdmin');
      return result;
    }
    return false;
  }

  isPassenger() {
    if (this.userRoles != null) {
      const result = this.userRoles.includes('Passenger');
      return result;
    }
    return false;
  }
}

