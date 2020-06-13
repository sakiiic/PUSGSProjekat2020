import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { AccountService } from '../../services/account-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  modalRef: BsModalRef;
  userData: any[] = [];
  resultMessage: string;
  model: any = {};

  constructor(private modalService: BsModalService, private authenticatService: AuthenticatService,
    private alertify: AlertifyService, private authService: AuthService, private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
  }

  openModalLogin() {
    this.modalRef = this.modalService.show(LoginComponent);
  }

  openModalRegister() {
    this.modalRef = this.modalService.show(RegisterComponent);
  }

  openModalRegisterRenta() {
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

  logInWithFacebook(platform: string): void {
    platform = FacebookLoginProvider.PROVIDER_ID;
    //Sign In and get user Info using authService that we just injected
       this.authService.signIn(platform).then(
    (response) => {
    //Get all user details
         console.log(platform + ' logged in user data is= ' , response);
    //Take the details we need and store in an array
         this.userData.push({
           UserId: response.id,
           Provider: response.provider,
           FirstName: response.firstName,
           LastName: response.lastName,
           EmailAddress: response.email,
           PictureUrl: response.photoUrl
         });

         this.model.email = response.email;
         this.model.password = "sara1996";
         this.authenticatService.login(this.model).subscribe();
         this.accountService.Login(this.userData[0]).subscribe(
          result => {
            console.log('success', result);
            this.router.navigate(['/rentacar']);
          },
          
      error => {
            this.resultMessage = 'it didn\'t work and that sucks';
            console.log(error);
           }
        );
     },
     (error) => {
       console.log(error);
       this.resultMessage = error;
    })
  }


}
