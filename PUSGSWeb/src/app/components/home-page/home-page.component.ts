import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from 'src/app/services/authentication/authentication.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  modalRef: BsModalRef;
  
  constructor(private modalService: BsModalService, private authService: AuthService, private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  openModalLogin() {
    this.modalRef = this.modalService.show(LoginComponent);
  }

  openModalRegister() {
    this.modalRef = this.modalService.show(RegisterComponent);
  }

  loggedIn() {
    return this.authService.loggedIn();
    /* return true; */
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.authService.userRoles = null;
    this.alertify.message('logged out');
    this.router.navigate(['/']);
  }


  isPassenger() {
    return this.authService.isPassenger();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isAviocompanyAdmin() {
    return this.authService.isAviocompanyAdmin();
  }

  isRentacarAdmin() {
    return this.isRentacarAdmin();
  }

}
