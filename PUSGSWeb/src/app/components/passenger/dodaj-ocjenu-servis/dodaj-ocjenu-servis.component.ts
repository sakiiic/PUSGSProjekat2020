import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Ocjena } from 'src/app/models/ocjena.model';

@Component({
  selector: 'app-dodaj-ocjenu-servis',
  templateUrl: './dodaj-ocjenu-servis.component.html',
  styleUrls: ['./dodaj-ocjenu-servis.component.scss']
})
export class DodajOcjenuServisComponent implements OnInit {

  id: any;
  ocjena: Ocjena;
  dodajOcjenuForm: FormGroup;
  ocijena: number;

  @ViewChild('messageblock', {static: true }) messageblock: ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: RentACarService, 
  public dialogRef: MatDialogRef<DodajOcjenuServisComponent>, 
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
    this.service.ocijeniServis(this.id, this.ocijena).subscribe(() => 
        this.alertify.success('Uspjesno ocijenjen servis!'));

    this.dialogRef.close();
  }
  
  goBack() {
    this.dialogRef.close();
  }

}
