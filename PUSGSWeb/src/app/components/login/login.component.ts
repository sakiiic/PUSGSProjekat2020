import { Component, OnInit } from '@angular/core';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthenticatService, private alertify: AlertifyService,
              private router: Router, public modalRef: BsModalRef) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in succesfully');
      this.router.navigate(['/rentacar']);
      this.modalRef.hide();
    }, error => {
      this.alertify.error(error);
    }, () => {
      console.log('This is where magic happens!');
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

}
