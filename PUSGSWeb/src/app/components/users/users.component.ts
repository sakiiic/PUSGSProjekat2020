import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { KorisnikService } from 'src/app/services/korisnik/korisnik.service';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { KorisnikModel } from 'src/app/models/korisnik.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private currentUserId: any;
  private allUsers: any;
  public displayedUsers: KorisnikModel[];

  constructor(private auth: AuthenticatService, private alertify: AlertifyService, public userService: KorisnikService) { }

  ngOnInit(): void {
    this.currentUserId = this.auth.currentUser.id;
    console.log('Moj id', this.currentUserId);
    this.refresh();
  }

  refresh() {
    this.userService.getAllUsers().subscribe(users => {
      this.allUsers = users;
      this.displayedUsers = this.allUsers;
      console.log('Korisnici', this.displayedUsers);
    });
  }

  
}
