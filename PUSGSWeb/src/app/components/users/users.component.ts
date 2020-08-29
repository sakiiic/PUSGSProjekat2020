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
  private tempArr: any;
  public displayedUsers: KorisnikModel[];
  public filterUsers: KorisnikModel[];
  public friendRequests: FriendDTO[];
  public friends: FriendDTO[];
  public search = "";
  addedFriends = [];

  constructor(private auth: AuthenticatService, private alertify: AlertifyService, public userService: KorisnikService) { }

  ngOnInit(): void {
    this.currentUserId = this.auth.currentUser.id;
    this.currentUserName = this.auth.currentUser.userName;
    console.log('Moj id', this.currentUserId);
    this.refresh();
  }

  refresh() {
    this.userService.getFriendRequest(this.currentUserId).subscribe(requests => {
      this.userService.getFriends(this.currentUserId).subscribe(myFriends => {

        this.temp = requests;
        this.friendRequests = this.temp;
        let friendsList = [];
        this.friendRequests.forEach(el => {
          friendsList.push(el.korisnikName);
        })
        console.log('Zahtjevi', this.friendRequests);

        this.tempArr = myFriends;
        this.friends = this.tempArr;
        let allFriends = [];
        this.friends.forEach(el => {
          allFriends.push(el.korisnikName);
        })
        console.log('Prijatelji', this.friends);

        this.userService.getAllUsers().subscribe(users => {
          this.allUsers = users;     
          this.displayedUsers= this.allUsers;
          this.displayedUsers = this.displayedUsers.filter((element, idx) => {
          
            const tmpArr =  element.userRoles.filter((el) => {
              return el.roleId === 1;
            });
            
            return tmpArr.length !== 0 && !friendsList.includes(element.userName) 
            && element.userName !== this.currentUserName && !allFriends.includes(element.userName);
        });     
          this.filterUsers = this.displayedUsers;
          console.log('Korisnici', this.filterUsers);
        });
      });
    });
  }

  checkState(user: KorisnikModel){
    if(this.addedFriends.includes(user.id))
     return false;
    else
     return true;
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
      this.addedFriends.push(friend.friendId);
      console.log("Dodat id", this.addedFriends);
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

  unfriend(friend: FriendDTO){
    friend.state = 0;
    this.userService.acceptRequest(this.currentUserId, friend).subscribe(() => {
      console.log("Izbrisan ", friend);
      this.refresh();
    });
  }

  private _filterBySearchText(
    usersToFilter: KorisnikModel[],
    searchText: string
  ): KorisnikModel[] {
    return usersToFilter.filter((user) => {
      
      /*if(user.userName !== null){
        if (user.userName.toLowerCase().includes(searchText)) {
          return true;
        }
      } 
      if(user.email !== null){
        if (user.email.toLowerCase().includes(searchText)) {
          return true;
        }
      }*/
      if(user.name !== null){
        if (user.name.toLowerCase().includes(searchText)) {
          return true;
        }
      }
      if(user.surname !== null){
        if (user.surname.toLowerCase().includes(searchText)) {
          return true;
        }
      }

      return false;
    });
  }

  onSubmit(): void {
    const searchText = this.search.toLowerCase();
    let filteredUsers = this._filterBySearchText(this.displayedUsers, searchText);

    if(searchText === "")
    {
      this.refresh();
    }
    
    this.displayedUsers = filteredUsers;
  }
}
