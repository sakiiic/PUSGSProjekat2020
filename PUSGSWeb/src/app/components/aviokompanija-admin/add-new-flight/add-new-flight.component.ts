import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LetModel } from 'src/app/models/let.model';
import { LetService } from 'src/app/services/let/let.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-new-flight',
  templateUrl: './add-new-flight.component.html',
  styleUrls: ['./add-new-flight.component.scss']
})
export class AddNewFlightComponent implements OnInit {

  dodajLetForm: FormGroup;
  let: LetModel;
  aviokompanijaId: any;

  constructor(private fb: FormBuilder, private letService: LetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.aviokompanijaId = this.route.snapshot.params.aviokompanijaId;
    console.log('Id aviokompanije', this.aviokompanijaId);
    this.dodajLet();
  }

  dodajLet() {
    this.dodajLetForm = this.fb.group({
      destinacija: ['', Validators.required],
      datumVrijemePolaska: ['', Validators.required],
      datumVrijemeDolaska: ['', Validators.required],
      vrijemePutovanja: ['', Validators.required],
      duzinaPutovanja: ['', Validators.required],
      brojPresjedanja: ['', Validators.required],
      lokacijePresjedanja: ['', Validators.required],
      cijenaKarte: ['', Validators.required],
      aviokompanijaId: 1
    });
  }

  dodaj() {
    this.let = Object.assign({}, this.dodajLetForm.value);
    this.letService.postLet(this.let).subscribe(() => {
      console.log('Uspjesno dodat let');
      this.router.navigateByUrl(`/aviocompany/flightDetails/${this.aviokompanijaId}`);
    }, error => {
      console.log('Neuspjesno dodat let');
    });
  }

  goBack() {
    window.history.back();
  }

}
