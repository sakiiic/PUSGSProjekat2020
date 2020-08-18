import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LetService } from 'src/app/services/let/let.service';
import { ReserveSeatDataHandlerService } from 'src/app/services/reserve-seat-data-handler.service';
import { LetModel } from 'src/app/models/let.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss']
})
export class FlightDetailComponent implements OnInit {
  flight: any;
  id: number;
  reservedSeats : any;
  //pending = [];
  seatsFirstRow = [];
  seatSecondRow = [];
  seatsNum: number;
  seatNumber: number;

  constructor(private service: LetService, private route: ActivatedRoute,
    private router: Router, private seatsService: ReserveSeatDataHandlerService) {
      
  }

  ngOnInit(): void {
    this.seatsService.removeFromPendindSeats();
    this.route.params.subscribe(params => { this.id = params['id']; });
    this.service.getLetic(this.id).subscribe(result => {
      this.service.getSeats(this.id).subscribe(seats => {
        this.flight = result;
        this.seatsNum = result[0].brojSjedistaURedu;
        this.reservedSeats = seats;
      
        console.log("My flight", this.flight, "broj sjedista", this.seatsNum);
        //console.log("Number", this.reservationNumber);    
        
        for (let i = 0; i < this.seatsNum/2; i++)      
        {      
            if (this.reservedSeats.includes(i)) {
              this.seatsFirstRow.push({ reserved: true });
            } else {
              this.seatsFirstRow.push({ reserved: false });
            }          
        }

        for(let i= this.seatsNum/2; i < this.seatsNum; i ++){
          if (this.reservedSeats.includes(i)) {   
            this.seatSecondRow.push({ reserved: true });
          } else {
            this.seatSecondRow.push({ reserved: false });
          }
        }
      });
    });
  }

  makeReservation(idx: number) {
    alert( "CLICKED" + idx);
    this.seatsService.addToPendingSeats(idx);
    //this.pending.push(idx);
    console.log("Pending...", this.seatsService.pendingSeats);
    this.seatNumber = idx;
  }

  makeReservationSecond(idx: number) {
    let index =  this.seatsFirstRow.length + idx;
    alert( "CLICKED SECOND " + index);
    this.seatsService.addToPendingSeats(index); 
    //this.pending.push(index);
    console.log("Pending...", this.seatsService.pendingSeats);
    this.seatNumber = index;
  }

  openReservationForm()
  {
    console.log("Number", this.seatNumber); 
    this.router.navigateByUrl(`flight/${this.id}/reservation/${this.seatNumber}`);
  }

}
