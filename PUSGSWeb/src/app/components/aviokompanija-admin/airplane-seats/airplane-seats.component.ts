import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LetService } from 'src/app/services/let/let.service';
import { ReserveSeatDataHandlerService } from 'src/app/services/reserve-seat-data-handler.service';
import { FlightSeatDTO } from 'src/app/models/flightSeatDTO';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-airplane-seats',
  templateUrl: './airplane-seats.component.html',
  styleUrls: ['./airplane-seats.component.scss']
})
export class AirplaneSeatsComponent implements OnInit {

  flight: any;
  id: number;
  reservedSeats : any;
  seatsFirstRow = [];
  seatSecondRow = [];
  seatsNum: number;
  seatNumber: number;

  constructor(private service: LetService, private route: ActivatedRoute,
    private router: Router, private seatsService: ReserveSeatDataHandlerService,
    private auth: AuthenticatService) {
      
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

  takeSeat(){
    let seat: FlightSeatDTO = {     
      reservedById: this.auth.currentUser.id,
      seatNumber : this.seatNumber,
      letId: this.id
    };

    this.service.addResevation(seat).subscribe(() => {
      window.location.reload();
      this.router.navigateByUrl(`seats/${this.id}`);
    });
    
  }
}
