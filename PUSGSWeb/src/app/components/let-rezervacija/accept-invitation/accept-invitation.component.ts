import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { KorisnikModel } from 'src/app/models/korisnik.model';
import { KorisnikService } from 'src/app/services/korisnik/korisnik.service';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { InvitationDTO } from 'src/app/models/invitationDTO';
import { FlightSeatDTO } from 'src/app/models/flightSeatDTO';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LetService } from 'src/app/services/let/let.service';


@Component({
  selector: 'app-accept-invitation',
  templateUrl: './accept-invitation.component.html',
  styleUrls: ['./accept-invitation.component.scss']
})
export class AcceptInvitationComponent implements OnInit {

  private id: any;
  private temp: any;
  public invitation: InvitationDTO;
  dodajRezForm: FormGroup;
  seat: FlightSeatDTO;
  reservedById: any;
  seatNumber: any;
  letId: any;

  constructor(private fb: FormBuilder, private auth: AuthenticatService, private alertify: AlertifyService,
    public userService: KorisnikService, private letService: LetService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.userService.getInvitation(this.id).subscribe(requests => {
      this.temp = requests;
      this.invitation = this.temp;

      this.reservedById = this.invitation[0].reservedById;
      this.seatNumber = this.invitation[0].seatNumber;
      this.letId = this.invitation[0].letId;

      console.log('id', this.invitation[0].reservedById, this.reservedById);
      console.log('Inv', this.invitation, this.seatNumber);
    });

    this.dodajRezForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      passportNumber: ['', Validators.required],
      reservedById: this.reservedById,
      seatNumber: this.seatNumber,
      letId: this.letId
    });

  }

  dodaj() {
    const { name, surname, passportNumber } = this.dodajRezForm.getRawValue();
    let seat = { name, surname, passportNumber, reservedById: this.reservedById, seatNumber: this.seatNumber, letId: this.letId };

    this.letService.addResevation(seat).subscribe(() => {
      this.userService.deleteInvitation(this.id).subscribe(() => {
        this.router.navigateByUrl(`/invitations`);
        console.log('Uspjesno dodata rezervacija');
      }, error => {
        console.log('Neuspjesno dodata rezervacija');
      });
    });
  }

  goBack() {
    window.history.back();
  }

}
