import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { KorisnikService } from 'src/app/services/korisnik/korisnik.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.scss']
})
export class KorisnikComponent implements OnInit {

  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  number: string;
  street: string;
  dateOfBirth: Date;
  userId: any = this.auth.currentUser.id;

  public formModel: FormGroup;
  public id: any;
  public dataSource: any;
  korisnici: any;

  constructor(private auth: AuthenticatService, fb: FormBuilder, private service: KorisnikService) {
      
      this.id = this.userId;

      console.log('Ovo mi je id', this.userId);
      console.log('Korisnik', this.dataSource)
     }

  ngOnInit(): void {
    this.service.getKorisnik(this.id).subscribe((res: any[]) => {
      this.dataSource = res;
    })
  }

  editService(form: NgForm) {
    //this.username = form.value.username;
    this.password = form.value.password;
    //this.firstName = form.value.firstName;
    //this.lastName = form.value.lastName;
    this.email = form.value.email;
    //this.city = form.value.city;
    //this.street = form.value.street;
    //this.number = form.value.number;
    this.dateOfBirth = form.value.dateOfBirth;

    let model: any;

    model = {
      //username: this.username,
      password: this.password,
      //firstName: this.firstName,
      //lastName: this.lastName,
      email: this.email,
      //city: this.city,
      //street: this.street,
      //number: this.number,
      dateOfBirth: this.dateOfBirth,    
    }

    this.service.editKorisnik(this.dataSource.id, model).subscribe();
    
  }

}
