export class FlightSeat {
    seatId: number;
    letId: number;
  
    seatNumber: number;
  
    // Id of flight ticket that reserved this seat (nullable)
    reservedById: number;
  
    get isReserved(): boolean {
      return !!this.reservedById;
    }
  }
  