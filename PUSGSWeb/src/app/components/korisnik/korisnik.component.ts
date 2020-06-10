import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.scss']
})
export class KorisnikComponent implements OnInit {

  id: any;
  korisnikId: any;
  username: any;
  email: any;
  password: string;
  name: string;
  surname: string;
  city: string;
  number: string;
  street: string;
  dateOfBirth: Date;

  constructor(private auth: AuthenticatService, private alertify: AlertifyService) {

    this.korisnikId = this.auth.currentUser.id;
    this.username = this.auth.currentUser.userName;
    this.email = this.auth.currentUser.email;
    this.password = this.auth.currentUser.password;
    this.name = this.auth.currentUser.name;
    this.surname = this.auth.currentUser.surname;
    this.city = this.auth.currentUser.address.city;
    this.street = this.auth.currentUser.address.street;
    this.number = this.auth.currentUser.address.number;
    this.dateOfBirth = this.auth.currentUser.dateOfBirth;
   }

  ngOnInit(): void {
  }

  
}
