export class FriendDTO {
    constructor(){
        this.korisnikId = null;
        this.korisnikName = null;
        this.friendId = null;
        this.friendName = null;
        this.state = null;
    }
    
    korisnikId: number;
    korisnikName: string;
    friendId: number;
    friendName: string;
    state: number;
    
}