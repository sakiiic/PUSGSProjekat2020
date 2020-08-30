import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LetService } from 'src/app/services/let/let.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';

@Component({
  selector: 'app-cancel-reservation',
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.scss']
})
export class CancelReservationComponent implements OnInit {

  id: number;

  @ViewChild('messageblock', {static: true }) messageblock: ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: LetService, 
  public dialogRef: MatDialogRef<CancelReservationComponent>, 
  private alertify: AlertifyService) { 
    this.id = data.letId;
  }

  ngOnInit(): void {
  }

  otkaziRezervaciju(){
    
    this.service.otkaziLet(this.id).subscribe(res =>
      {
        if(res === null)
        {
          alert("Ne mozete otkazati let 4 sata prije polaska");
        }
        else
        {
          alert("Uspjesno ste otkazali rezervaciju");
          this.dialogRef.close();
          window.location.reload();
        }
      },
      err => 
      {
        alert("Greska pri otkazivanju leta");
      }
    );
  }

  closeModal() {
    this.dialogRef.close();
  }

}
