import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-rentacar-service',
  templateUrl: './edit-rentacar-service.component.html',
  styleUrls: ['./edit-rentacar-service.component.scss']
})
export class EditRentacarServiceComponent implements OnInit {

  public formModel: FormGroup;

  constructor(fb: FormBuilder) {

    this.formModel = fb.group({
      naziv: ['', Validators.required],
      adresa: ['', Validators.required],
      opis: ['', Validators.required],
      lokacije: ['', Validators.required]
    })
  }

  get naziv() { return this.formModel.get('naziv') }
  get adresa() { return this.formModel.get('adresa') }
  get opis() { return this.formModel.get('opis') }
  get lokacije() { return this.formModel.get('lokacije') }

  ngOnInit(): void {
  }

  onSubmit() {
    const sendModel = {
      
    }
  }

}
