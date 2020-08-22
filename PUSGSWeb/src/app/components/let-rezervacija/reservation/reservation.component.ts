import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlightSeatDTO } from 'src/app/models/flightSeatDTO';
import { LetService } from 'src/app/services/let/let.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  passNum: number;

  constructor(private fb: FormBuilder, private letService: LetService, private router: Router, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params.id;
    this.seatNumber = this.route.snapshot.params.seatNumber;
    this.dodajRezForm = this.fb.group({
      reservedById: ['', Validators.required],
      seatNumber : this.seatNumber,
      letId: this.id
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.seatNumber = this.route.snapshot.params.seatNumber;

    console.log('Parametri', this.id, this.seatNumber);
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

  goBack() {
    window.history.back();
  }
}
