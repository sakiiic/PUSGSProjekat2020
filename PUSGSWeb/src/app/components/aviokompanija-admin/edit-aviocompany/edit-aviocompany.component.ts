import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AviokompanijaService } from 'src/app/services/aviokompanija/aviokompanija.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AviokompanijaModel } from 'src/app/models/aviokompanija.model';
import { AviokompanijaDTOModel } from 'src/app/models/aviokompanijaDTO.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-aviocompany',
  templateUrl: './edit-aviocompany.component.html',
  styleUrls: ['./edit-aviocompany.component.scss']
})
export class EditAviocompanyComponent implements OnInit {

  naziv: string;
  destinacije: Array<string>;
  opis: string;
  adresa: string;

  public formModel: FormGroup;
  public serviceId: any;
  public dataSource: any;

  @ViewChild('messageblock', { static: true }) messageblock: ElementRef;
  constructor(fb: FormBuilder, private service: AviokompanijaService, @Inject(MAT_DIALOG_DATA) public data: any, 
  public dialogRef: MatDialogRef<EditAviocompanyComponent>, private router: Router) {

    this.serviceId = data.aviokompanijaId;
    console.log('thissss', this.serviceId)
  }

  ngOnInit(): void {
    this.service.getAviokompanijaInfo(this.serviceId).subscribe((res: AviokompanijaModel[]) => {
      this.dataSource = res;
    })
  }

  editService(form: NgForm){
    this.naziv = form.value.naziv;
    this.destinacije = form.value.destinacije;
    this.opis = form.value.opis;
    this.adresa = form.value.adresa;

    let model: any;

    model = {
      naziv: this.naziv,
      destinacije: this.destinacije,
      opis: this.opis,
      adresa: this.adresa
    }
   
    this.service.editAviocompany(this.serviceId, model).subscribe();
    this.dialogRef.close();
  }

  closeModal(){
    this.dialogRef.close();
  }

}
