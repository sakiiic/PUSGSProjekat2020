import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlightSeatDTO } from 'src/app/models/flightSeatDTO';
import { LetService } from 'src/app/services/let/let.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { KorisnikService } from 'src/app/services/korisnik/korisnik.service';
import { FriendDTO } from 'src/app/models/friendDTO';
import { FlightSeat } from 'src/app/models/flightSeat';
import { InvitationDTO } from 'src/app/models/invitationDTO';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  dodajRezForm: FormGroup;
  seat: FlightSeatDTO;
  id: number;
  seatNumber: number;
  passportNumber: number;
  reservedById: number;
  private tempArr: any;
  public friends: FriendDTO[];


  constructor(private fb: FormBuilder, private letService: LetService, private router: Router,
    private auth: AuthenticatService, private route: ActivatedRoute, public userService: KorisnikService) { 

    this.id = this.route.snapshot.params.id;
    this.seatNumber = this.route.snapshot.params.seatNumber;
    this.dodajRezForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      passportNumber: ['', Validators.required],
      reservedById: this.auth.currentUser.id,
      seatNumber : this.seatNumber,
      letId: this.id
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.seatNumber = this.route.snapshot.params.seatNumber;

    console.log('Parametri', this.id, this.seatNumber);

    this.userService.getFriends(this.auth.currentUser.id).subscribe(myFriends => {
      this.tempArr = myFriends;
      this.friends = this.tempArr;
      let allFriends = [];
      this.friends.forEach(el => {
        allFriends.push(el.korisnikName);
      })
      console.log('Prijatelji', this.friends);
    });
  }
  
  dodaj() {
    this.seat = Object.assign({}, this.dodajRezForm.getRawValue());
    console.log('sjediste', this.seat);
    this.letService.addResevation(this.seat).subscribe(() => {
      this.router.navigateByUrl(`flight/${this.id}`);
      console.log('Uspjesno dodata rezervacija');
    }, error => {
      console.log('Neuspjesno dodata rezervacija');
    });
  }

  callFriend(friend){
    let invitation: InvitationDTO = {     
      reservedById: this.auth.currentUser.id,
      seatNumber : this.seatNumber,
      letId: this.id,
      friendId: friend.korisnikId 
  };

    this.userService.addInvitation(invitation).subscribe(inv => {
      alert('Uspjesno ste poslali pozivnicu za let korisniku ' + friend.korisnikName);
      this.router.navigateByUrl(`flight/${this.id}`);
    });
  }

  goBack() {
    window.history.back();
  }
}
