export class InvitationDTO {
    constructor(){
        this.letId = null;
        this.seatNumber = null;
        this.reservedById = null;
        this.friendId = null;
        this.userName = null;
    }
    
    letId: number;
    seatNumber: number;
    reservedById: number;
    friendId: number;
    userName: string;
}