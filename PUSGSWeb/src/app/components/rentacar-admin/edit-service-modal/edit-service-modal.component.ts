import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { RentacarDTOModel } from 'src/app/models/rentacarDTO.model';

@Component({
  selector: 'app-edit-service-modal',
  templateUrl: './edit-service-modal.component.html',
  styleUrls: ['./edit-service-modal.component.scss']
})
export class EditServiceModalComponent implements OnInit {

  naziv: string;
  lokacije: Array<string>;
  opis: string;
  adresa: string;

  public formModel: FormGroup;
  public serviceId: any;
  public dataSource: any;

  @ViewChild('messageblock', { static: true }) messageblock: ElementRef;
  constructor(fb: FormBuilder, private service: RentACarService, @Inject(MAT_DIALOG_DATA) public data: any, 
  public dialogRef: MatDialogRef<EditServiceModalComponent>) {

    this.serviceId = data.rentacarId;
    console.log('thissss', this.serviceId)
  }


  ngOnInit(): void {
    this.service.getRentACarInfo(this.serviceId).subscribe((res: RentACarModel[]) => {
      this.dataSource = res;
    })
  }

  editService(form: NgForm){
    this.naziv = form.value.naziv;
    this.lokacije = form.value.lokacije;
    this.opis = form.value.opis;
    this.adresa = form.value.adresa;

    let model: any;

    model = {
      naziv: this.naziv,
      lokacije: this.lokacije,
      opis: this.opis,
      adresa: this.adresa
    }
   
    this.service.editRentacarServis(this.serviceId, model).subscribe();
    this.dialogRef.close();
  }

  closeModal(){
    this.dialogRef.close();
  }
}




