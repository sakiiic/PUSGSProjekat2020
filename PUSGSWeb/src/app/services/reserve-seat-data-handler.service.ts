import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReserveSeatDataHandlerService {
  	pendingSeats =[];

	addToPendingSeats(seatNum:number){
		let alreadyExists = JSON.parse(localStorage.getItem('pendingSeats'));
		if(alreadyExists === null){			
			this.pendingSeats.push(seatNum)
		}else{
			alreadyExists.push(seatNum);
			this.pendingSeats = alreadyExists;
		}
		localStorage.setItem('pendingSeats', JSON.stringify(this.pendingSeats));
  	}
  
 	removeFromPendindSeats(){
		localStorage.removeItem('pendingSeats');
	}

  	fetchPendingSeats()
	{
		this.pendingSeats = JSON.parse(localStorage.getItem('pendingSeats'));
		return this.pendingSeats;
	}

  	constructor() { }
}
