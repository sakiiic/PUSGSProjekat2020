import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  modalRef: BsModalRef;
  userData: any[] = [];
  resultMessage: string;

  constructor(private modalService: BsModalService, private authenticatService: AuthenticatService, private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit(): void {
  }

  openModalLogin() {
    this.modalRef = this.modalService.show(LoginComponent);
  }

  openModalRegister() {
    this.modalRef = this.modalService.show(RegisterComponent);
  }

  loggedIn() {
    return this.authenticatService.loggedIn();
    /* return true; */
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authenticatService.decodedToken = null;
    this.authenticatService.currentUser = null;
    this.authenticatService.userRoles = null;
    this.alertify.message('logged out');
    this.router.navigate(['/']);
  }


  isPassenger() {
    return this.authenticatService.isPassenger();
  }

  isAdmin() {
    return this.authenticatService.isAdmin();
  }

  isAviocompanyAdmin() {
    return this.authenticatService.isAviocompanyAdmin();
  }

  isRentacarAdmin() {
    return this.authenticatService.isRentacarAdmin();
  }
}
