import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { KorisnikVozilo } from 'src/app/models/korisnikVozilo.model';

@Component({
  selector: 'app-reserve-car-modal',
  templateUrl: './reserve-car-modal.component.html',
  styleUrls: ['./reserve-car-modal.component.scss']
})
export class ReserveCarModalComponent implements OnInit {

  id: any;
  korisnikId: any;
  username: any;
  email: any;
  name: string;
  surname: string;
  city: string;
  number: string;
  street: string;
  dateOfBirth: Date;
  voziloKorisnik: KorisnikVozilo;

  @ViewChild('messageblock', {static: true }) messageblock: ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private auth: AuthenticatService, private servis: RentACarService,
  public dialogRef: MatDialogRef<ReserveCarModalComponent>, 
  private alertify: AlertifyService) {
    this.id = data.voziloId;

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

  rezervisi(){
    this.servis.rezervisiVozilo(this.id, this.korisnikId).subscribe();
    this.dodajVozilo();
    window.location.reload();
    this.alertify.success('Uspjesno rezervisano vozilo!');
    this.dialogRef.close();
    
  }

  dodajVozilo(){
    this.voziloKorisnik = {
      korisnikId: this.korisnikId,
      voziloId: this.id,
      city: this.city,
      datumRodjenja: this.dateOfBirth,
      email: this.email,
      name: this.name,
      surname: this.surname,
      username: this.username,
      number: this.number,
      street: this.street
    }

    this.servis.dodajVoziloKorisniku(this.voziloKorisnik).subscribe();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
