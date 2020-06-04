import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { VoziloModel } from 'src/app/models/vozilo.model';

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
    public dialogRef: MatDialogRef<EditCarModalComponent>) {

    this.rentaId = data.rentacarId;
    this.voziloId = data.voziloId;
    console.log('thissss', this.rentaId)
  }

  ngOnInit(): void {
    this.service.getRentACarInfo(this.rentaId).subscribe((res: any[]) => {
      this.dataSource = res;
      this.vozila = this.dataSource.vozila;
      console.log(this.vozila)
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
      image: this.vozila[this.voziloId].image
    }

    this.service.editVozilo(this.voziloId, model).subscribe();
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
