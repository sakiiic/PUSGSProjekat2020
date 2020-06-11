import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { LetService } from 'src/app/services/let/let.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';

@Component({
  selector: 'app-reserve-flight',
  templateUrl: './reserve-flight.component.html',
  styleUrls: ['./reserve-flight.component.scss']
})
export class ReserveFlightComponent implements OnInit {

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

  @ViewChild('messageblock', {static: true }) messageblock: ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private auth: AuthenticatService, private servis: LetService,
  public dialogRef: MatDialogRef<ReserveFlightComponent>, 
  private alertify: AlertifyService) {
    this.id = data.letId;

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
    this.servis.rezervisiLet(this.id, this.korisnikId).subscribe();
    this.alertify.success('Uspjesno rezervisan let!');
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
