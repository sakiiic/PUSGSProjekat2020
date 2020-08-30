import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { KorisnikModel } from 'src/app/models/korisnik.model';
import { FriendDTO } from 'src/app/models/friendDTO';
import { InvitationDTO } from 'src/app/models/invitationDTO';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  private readonly apiURI = environment.api;

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.apiURI + 'api/Korisnik/GetAllUsers');
  }

  addFriend(friend: FriendDTO) {
    return this.http.post(this.apiURI + 'api/Korisnik/AddFriend', friend);
  }

  acceptRequest(friendId, friend: FriendDTO){
    return this.http.patch(this.apiURI + 'api/Korisnik/AcceptRequest/' + friendId, friend);
  }

  getFriendRequest(friendId){
    return this.http.get(this.apiURI + 'api/Korisnik/GetFriendRequest/' + friendId)
  }

  getFriends(id){
    return this.http.get(this.apiURI + 'api/Korisnik/GetFriends/' + id)
  }

  addInvitation(invitation: InvitationDTO) {
    return this.http.post(this.apiURI + 'api/Korisnik/AddInvitation', invitation);
  }

  getInvitations(id){
    return this.http.get(this.apiURI + 'api/Korisnik/GetInvitations/' + id)
  }

  getInvitation(id: number) {
    return this.http.get(this.apiURI + 'api/Korisnik/GetInvitation/' + id);
  }

  deleteInvitation(id){
    return this.http.delete(this.apiURI + 'api/Korisnik/DeleteInvitation/' + id);
  }
}
