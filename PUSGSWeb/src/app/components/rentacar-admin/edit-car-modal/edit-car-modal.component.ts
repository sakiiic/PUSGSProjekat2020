import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { VoziloModel } from 'src/app/models/vozilo.model';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';

@Component({
  selector: 'app-edit-car-modal',
  templateUrl: './edit-car-modal.component.html',
  styleUrls: ['./edit-car-modal.component.scss']
})
export class EditCarModalComponent implements OnInit {

  marka: string;
  model: string;
  godinaProizvodnje: number;
  tipVozila: string;
  brojSjedista: number;
  cijena: number;
  tipGoriva: string;
  transmisija: string;
  rentacarId: number;

  public formModel: FormGroup;
  public rentaId: any;
  public voziloId: any;
  public dataSource: any;
  vozila: any;

  @ViewChild('messageblock', { static: true }) messageblock: ElementRef;
  constructor(fb: FormBuilder, private service: RentACarService, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditCarModalComponent>, private alertify: AlertifyService) {

    this.rentaId = data.rentacarId;
    this.voziloId = data.voziloId;
  }

  ngOnInit(): void {
    this.service.getVozilo(this.rentaId, this.voziloId).subscribe((res: any[]) => {
      this.dataSource = res;
    })
  }

  editService(form: NgForm) {
    this.marka = form.value.marka;
    this.model = form.value.model;
    this.godinaProizvodnje = form.value.godinaProizvodnje;
    this.tipVozila = form.value.tipVozila;
    this.brojSjedista = form.value.brojSjedista;
    this.cijena = form.value.cijena;
    this.tipGoriva = form.value.tipGoriva;
    this.transmisija = form.value.transmisija;
    this.rentacarId = this.rentaId;

    let model: any;

    model = {
      marka: this.marka,
      model: this.model,
      godinaProizvodnje: this.godinaProizvodnje,
      tipVozila: this.tipVozila,
      brojSjedista: this.brojSjedista,
      cijena: this.cijena,
      tipGoriva: this.tipGoriva,
      transmisija: this.transmisija,
      rentacarId: this.rentaId,
      image: this.dataSource.voziloId.image
    }

    this.service.editVozilo(this.dataSource.voziloId, model).subscribe();
    this.alertify.success('Uspjesno izmijenjeno vozilo!');
    this.dialogRef.close();
    
  }

  closeModal() {
    this.dialogRef.close();
  }

}
