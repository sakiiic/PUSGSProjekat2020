export class InvitationDTO {
    constructor(){
        this.letId = null;
        this.seatNumber = null;
        this.reservedById = null;
        this.friendId = null;
    }
    
    letId: number;
    seatNumber: number;
    reservedById: number;
    friendId: number;
}