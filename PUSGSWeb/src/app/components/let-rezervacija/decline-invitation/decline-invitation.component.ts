import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KorisnikService } from 'src/app/services/korisnik/korisnik.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-decline-invitation',
  templateUrl: './decline-invitation.component.html',
  styleUrls: ['./decline-invitation.component.scss']
})
export class DeclineInvitationComponent implements OnInit {

  id: number;

  constructor(private service: KorisnikService, private route: ActivatedRoute, 
    private router: Router, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  otkaziRezervaciju(){
    this.id = this.route.snapshot.params.id;
    this.service.deleteInvitation(this.id).subscribe(res =>
      {
        if(res === null)
        {
          alert("Greska");
        }
        else
        {
          alert("Uspjesno ste odbili poziv na let");
          this.router.navigateByUrl(`/invitations`);
        }
      },
      err => 
      {
        alert("Greska pri otkazivanju leta");
      }
    );
  }

  closeModal() {
    window.history.back();
  }

}
