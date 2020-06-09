import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VoziloModel } from 'src/app/models/vozilo.model';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.scss']
})
export class AddNewCarComponent implements OnInit {

  dodajVoziloForm: FormGroup;
  vozilo: VoziloModel;

  constructor(private fb: FormBuilder, private rentacarService: RentACarService, 
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.dodajVozilo();
  }

  dodajVozilo() {
    this.dodajVoziloForm = this.fb.group({
      marka: ['', Validators.required],
      model: ['', Validators.required],
      godinaProizvodnje: ['', Validators.required],
      tipVozila: ['', Validators.required],
      brojSjedista: ['', Validators.required],
      cijena: ['', Validators.required],
      image: ['', Validators.required],
      tipGoriva: ['', Validators.required],
      transmisija: ['', Validators.required],
      rentACarId: 1
    });
  }

  dodaj() {
    this.vozilo = Object.assign({}, this.dodajVoziloForm.value);
    this.rentacarService.postVozilo(this.vozilo).subscribe(() => {
      console.log('Uspjesno dodato vozilo');
      this.alertify.success('Uspjesno rezervisano vozilo!');
    }, error => {
      console.log('Neuspjesno dodato vozilo');
    });
  }

  goBack() {
    window.history.back();
  }
}
