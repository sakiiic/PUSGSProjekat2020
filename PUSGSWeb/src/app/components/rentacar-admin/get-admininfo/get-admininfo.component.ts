import { Component, OnInit } from '@angular/core';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-get-admininfo',
  templateUrl: './get-admininfo.component.html',
  styleUrls: ['./get-admininfo.component.scss']
})
export class GetAdmininfoComponent implements OnInit {

  korisnikId: any;
  username: any;
  email: any;
  name: string;
  surname: string;
  city: string;
  number: string;
  street: string;
  dateOfBirth: Date;

  constructor(private auth: AuthenticatService) { 
    this.korisnikId = this.auth.currentUser.id;
    this.username = this.auth.currentUser.userName;
    this.email = this.auth.currentUser.email;
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
