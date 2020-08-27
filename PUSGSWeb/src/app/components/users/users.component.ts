import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { KorisnikService } from 'src/app/services/korisnik/korisnik.service';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { KorisnikModel } from 'src/app/models/korisnik.model';
import { FriendDTO } from 'src/app/models/friendDTO';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private currentUserId: any;
  private currentUserName: any;
  private allUsers;
  private temp: any;
  public displayedUsers: KorisnikModel[];
  public friendRequests: FriendDTO[];

  constructor(private auth: AuthenticatService, private alertify: AlertifyService, public userService: KorisnikService) { }

  ngOnInit(): void {
    this.currentUserId = this.auth.currentUser.id;
    this.currentUserName = this.auth.currentUser.userName;
    console.log('Moj id', this.currentUserId);
    this.refresh();
  }

  refresh() {
    this.userService.getFriendRequest(this.currentUserId).subscribe(friends => {
      this.temp = friends;
      this.friendRequests = this.temp;
      let friendsList = [];
      this.friendRequests.forEach(el => {
        friendsList.push(el.korisnikName);
      })
      console.log('Prijatelji', this.friendRequests);
      this.userService.getAllUsers().subscribe(users => {
        this.allUsers = users;     
        this.displayedUsers= this.allUsers;
        this.displayedUsers = this.displayedUsers.filter((element, idx) => {
        
          const tmpArr =  element.userRoles.filter((el) => {
            return el.roleId === 1;
          });
          
          return tmpArr.length !== 0 && !friendsList.includes(element.userName) && element.userName !== this.currentUserName;
       });     
  
        console.log('Korisnici', this.displayedUsers);
      });
    });

    

  }

  addFriend(user) {
    console.log('Dodaj prijatelja', this.currentUserId, this.currentUserName, user.id, user.userName);

    let friend: FriendDTO = {
      
        korisnikId: this.currentUserId,
        korisnikName: this.currentUserName,
        friendId: user.id,
        friendName: user.userName,
        state: 2
    };
    
    this.userService.addFriend(friend).subscribe(() => {
      alert('Uspjesno ste poslali zahtjev za prijateljstvo korisniku ' + user.userName);
      this.refresh();
    });
  }

  acceptRequest(friend: FriendDTO){   
    friend.state = 1;
    this.userService.acceptRequest(this.currentUserId, friend).subscribe(() => {
      console.log("Prihvacen ", friend);
      this.refresh();
    });
  }

  declineRequest(friend: FriendDTO){   
    friend.state = 0;
    this.userService.acceptRequest(this.currentUserId, friend).subscribe(() => {
      console.log("Odbijen ", friend);
      this.refresh();
    });
  }

  isFriendToCurrentUser(potentialFriend: KorisnikModel): boolean {
    //for(let i = 0; i < 2; i++)
    //{
      //if(this.friendRequests[i].korisnikName === potentialFriend.username)
      //{
        //console.log('Ime0', this.friendRequests[i].korisnikName);
        return false;
      //}
    //}
  }
}
