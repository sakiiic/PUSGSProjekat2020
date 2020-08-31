import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { LetService } from 'src/app/services/let/let.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AviokompanijaModel } from 'src/app/models/aviokompanija.model';
import { LetModel } from 'src/app/models/let.model';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent implements OnInit {

  destinacija: string;
  datumVrijemePolaska: Date;
  datumVrijemeDolaska: Date;
  vrijemePutovanja: string;
  duzinaPutovanja: string;
  brojPresjedanja: number;
  lokacijePresjedanja: Array<string>;
  cijenaKarte: number;
  aviokompanijaId: number;

  public formModel: FormGroup;
  public avioId: any;
  public letId: any;
  public dataSource: any;
  letovi: any;

  @ViewChild('messageblock', { static: true }) messageblock: ElementRef;
  constructor(fb: FormBuilder, private service: LetService, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditFlightComponent>) {

    this.avioId = data.aviokompanijaId;
    this.letId = data.letId;

    console.log('Ovo mi je id', this.letId)
  }

  ngOnInit(): void {
    this.service.getLet(this.avioId, this.letId).subscribe((res: any[]) => {
      this.dataSource = res;
    })
  }

  editService(form: NgForm) {
    this.destinacija = form.value.destinacija;
    this.datumVrijemePolaska = form.value.datumVrijemePolaska;
    this.datumVrijemeDolaska = form.value.datumVrijemeDolaska;
    this.vrijemePutovanja = form.value.vrijemePutovanja;
    this.duzinaPutovanja = form.value.duzinaPutovanja;
    this.brojPresjedanja = form.value.brojPresjedanja;
    this.lokacijePresjedanja = form.value.lokacijePresjedanja;
    this.cijenaKarte = form.value.cijenaKarte;
    this.aviokompanijaId = this.avioId;

    let model: any;

    model = {
      destinacija: this.destinacija,
      datumVrijemePolaska: this.datumVrijemePolaska,
      datumVrijemeDolaska: this.datumVrijemeDolaska,
      vrijemePutovanja: this.vrijemePutovanja,
      duzinaPutovanja: this.duzinaPutovanja,
      brojPresjedanja: this.brojPresjedanja,
      lokacijePresjedanja: this.lokacijePresjedanja,
      cijenaKarte: this.cijenaKarte,
      aviokompanijaId: this.aviokompanijaId
      
    }

    this.service.editLet(this.dataSource.letId, model).subscribe();
    this.dialogRef.close();
    window.location.reload();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
