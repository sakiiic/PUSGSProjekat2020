import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { KorisnikModel } from 'src/app/models/korisnik.model';
import { KorisnikService } from 'src/app/services/korisnik/korisnik.service';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { InvitationDTO } from 'src/app/models/invitationDTO';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {
  private temp: any;
  public invitations: InvitationDTO[];


  constructor(private auth: AuthenticatService, private alertify: AlertifyService, public userService: KorisnikService) { }

  ngOnInit(): void {
    this.userService.getInvitations(this.auth.currentUser.id).subscribe(requests => {
      this.temp = requests;
      this.invitations = this.temp;
      
      console.log('Zahtjevi', this.invitations);
    });
  }

}
