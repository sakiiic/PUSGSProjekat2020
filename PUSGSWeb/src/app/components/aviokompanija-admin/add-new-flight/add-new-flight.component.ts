import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LetModel } from 'src/app/models/let.model';
import { AviokompanijaService } from 'src/app/services/aviokompanija/aviokompanija.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-flight',
  templateUrl: './add-new-flight.component.html',
  styleUrls: ['./add-new-flight.component.scss']
})
export class AddNewFlightComponent implements OnInit {

  dodajLetForm: FormGroup;
  let: LetModel;

  constructor(private fb: FormBuilder, private aviokompanijaService: AviokompanijaService, private router: Router) { }

  ngOnInit(): void {
    this.dodajLet();
  }

  dodajLet() {
    this.dodajLetForm = this.fb.group({
      datumVrijemePolaska: ['', Validators.required],
      datumVrijemeDolaska: ['', Validators.required],
      vrijemePutovanja: ['', Validators.required],
      duzinaPutovanja: ['', Validators.required],
      brojPresjedanja: ['', Validators.required],
      lokacijePresjedanja: ['', Validators.required],
      cijenaKarte: ['', Validators.required],
      aviokompanijaId: 5
    });
  }

  dodaj() {
    this.let = Object.assign({}, this.dodajLetForm.value);
    this.aviokompanijaService.postLet(this.let).subscribe(() => {
      console.log('Uspjesno dodat let');
      this.router.navigate(['/aviocompany/flightDetails/' + 5]);
    }, error => {
      console.log('Neuspjesno dodat let');
    });
  }

  goBack() {
    window.history.back();
  }

}
