import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LetService } from 'src/app/services/let/let.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';

@Component({
  selector: 'app-cancel-flight',
  templateUrl: './cancel-flight.component.html',
  styleUrls: ['./cancel-flight.component.scss']
})
export class CancelFlightComponent implements OnInit {

  seatId: number;

  @ViewChild('messageblock', {static: true }) messageblock: ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: LetService, 
  public dialogRef: MatDialogRef<CancelFlightComponent>, 
  private alertify: AlertifyService) { 
    this.seatId = data.seatId;
    console.log('Id sjedista', this.seatId);
  }
  ngOnInit(): void {
  }

  otkaziRezervaciju(){
    
    this.service.cancelReservation(this.seatId).subscribe(res =>
      {
        if(res === false)
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
