import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';

@Component({
  selector: 'app-potvrdi-otkazivanje-modal',
  templateUrl: './potvrdi-otkazivanje-modal.component.html',
  styleUrls: ['./potvrdi-otkazivanje-modal.component.scss']
})
export class PotvrdiOtkazivanjeModalComponent implements OnInit {

  id: number;

  @ViewChild('messageblock', {static: true }) messageblock: ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: RentACarService, 
  public dialogRef: MatDialogRef<PotvrdiOtkazivanjeModalComponent>, 
  private alertify: AlertifyService) { 
    this.id = data.voziloId;
  }

  ngOnInit(): void {
  }

  otkaziRezervaciju(){
    this.service.otkaziRezervaciju(this.id).subscribe();
    window.location.reload();
    this.alertify.success('Uspjesno otkazana rezervacija!');
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
