import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';

@Component({
  selector: 'app-delete-car-modal',
  templateUrl: './delete-car-modal.component.html',
  styleUrls: ['./delete-car-modal.component.scss']
})
export class DeleteCarModalComponent implements OnInit {

  id: any;

  @ViewChild('messageblock', {static: true }) messageblock: ElementRef;
  constructor(public dialogRef: MatDialogRef<DeleteCarModalComponent>,
    public service: RentACarService, @Inject(MAT_DIALOG_DATA) public data: any,
    private alertify: AlertifyService) {
      this.id = data.rentacarId;
      console.log(this.id, "aaaaa")
    }
    
  ngOnInit(): void {
  }

  goBack() {
    window.history.back();
  }

  obrisiVozilo(){
    this.service.deleteVozilo(this.id).subscribe();
    this.alertify.success('Uspjesno obrisano vozilo!');
    this.dialogRef.close();
    window.location.reload();
  }

  closeModal(){
    this.dialogRef.close();
  }
}
