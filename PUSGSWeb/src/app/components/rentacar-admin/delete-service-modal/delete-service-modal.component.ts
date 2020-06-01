import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-service-modal',
  templateUrl: './delete-service-modal.component.html',
  styleUrls: ['./delete-service-modal.component.scss']
})
export class DeleteServiceModalComponent implements OnInit {

  dataSource: any;
  id: any;

  @ViewChild('messageblock', {static: true }) messageblock: ElementRef;
  constructor(public dialogRef: MatDialogRef<DeleteServiceModalComponent>,
    public service: RentACarService, 
    private activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.id = data.rentacarId;
      console.log(this.id, "aaaaa")
    }

  ngOnInit(): void {
  }

  openModal(){
    this.service.deleteRentacarServis(this.id).subscribe();
    this.dialogRef.close();
    window.location.reload();
  }

  closeModal(){
    this.dialogRef.close();
  }

}
