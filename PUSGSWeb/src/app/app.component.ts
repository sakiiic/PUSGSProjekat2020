import { Component } from '@angular/core';
import { AuthService } from './services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) { }
  
  title = 'PUSGSWeb';

  loggedIn() {
    return this.authService.loggedIn();
    /* return true; */
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isRentacarAdmin() {
    return this.authService.isRentacarAdmin();
  }

  isAviocompanyAdmin() {
    return this.authService.isAviocompanyAdmin();
  }
}
