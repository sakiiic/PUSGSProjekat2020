import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Ocjena } from 'src/app/models/ocjena.model';
import { AviokompanijaService } from 'src/app/services/aviokompanija/aviokompanija.service';

@Component({
  selector: 'app-ocijeni-aviokompaniju',
  templateUrl: './ocijeni-aviokompaniju.component.html',
  styleUrls: ['./ocijeni-aviokompaniju.component.scss']
})
export class OcijeniAviokompanijuComponent implements OnInit {

  id: any;
  ocjena: Ocjena;
  dodajOcjenuForm: FormGroup;
  ocijena: number;

  @ViewChild('messageblock', {static: true }) messageblock: ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: AviokompanijaService, 
  public dialogRef: MatDialogRef<OcijeniAviokompanijuComponent>, 
  private alertify: AlertifyService, private fb: FormBuilder) { 
    this.id = data.voziloId;
  }

  ngOnInit(): void {
    this.ocijeniServis();
  }

  ocijeniServis(){
    this.dodajOcjenuForm = this.fb.group({
      ocjena: ['']
    })
  }

  ocijeni(){
    this.ocjena = Object.assign({}, this.dodajOcjenuForm.value);
    this.ocijena = this.ocjena.ocjena;
    console.log(this.ocjena, 'nbaaladdpasl')
    console.log(this.ocijena)
    this.service.ocijeniAviokompaniju(this.id, this.ocijena).subscribe(() => 
        this.alertify.success('Uspjesno ocijenjen servis!'));

    this.dialogRef.close();
  }
  
  goBack() {
    this.dialogRef.close();
  }

}
