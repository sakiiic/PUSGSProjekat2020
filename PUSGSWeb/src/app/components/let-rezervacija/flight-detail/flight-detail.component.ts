import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LetService } from 'src/app/services/let/let.service';
import { LetModel } from 'src/app/models/let.model';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { UpdateFlightRequest } from '../entities/requests/update-flight-request';
//import userTypes from 'src/app/constants/user-types';
//import { UserService } from '../services/user.service';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss']
})
export class FlightDetailComponent implements OnInit {
  flight: any;
  id: number;
  seatsFirstRow = [];
  seatSecondRow = [];
  seatsNum: number;

  constructor(private service: LetService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    this.service.getLetic(this.id).subscribe(result => {
      this.flight = result;
      this.seatsNum = result[0].brojSjedistaURedu;
     
      console.log("My flight", this.flight, "broj sjedista", this.seatsNum);
      
      for (let i = 0; i < this.seatsNum/2; i++) {
        if (i % 2 === 0) {//if(i === seat.seatNum){}
          this.seatsFirstRow.push({ reserved: true });
        } else {
          this.seatsFirstRow.push({ reserved: false });
        }
      }

      for(let i= this.seatsNum/2; i < this.seatsNum; i ++){
        if (i % 2 === 0) {
          this.seatSecondRow.push({ reserved: false });
        } else {
          this.seatSecondRow.push({ reserved: true });
        }
      }
    });
  }

  makeReservation(idx: number) {
    alert( "CLICKED" + idx);
  }

  makeReservationSecond(idx: number) {
    let index =  this.seatsFirstRow.length + idx;
    alert( "CLICKED SECOND " + index);
  }

}
