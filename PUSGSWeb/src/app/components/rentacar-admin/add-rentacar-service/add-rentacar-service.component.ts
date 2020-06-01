import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RentacarDTOModel } from 'src/app/models/rentacarDTO.model';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rentacar-service',
  templateUrl: './add-rentacar-service.component.html',
  styleUrls: ['./add-rentacar-service.component.scss']
})
export class AddRentacarServiceComponent implements OnInit {

  dodajServisForm: FormGroup;
  rentacarModel: RentacarDTOModel;

  constructor(private fb: FormBuilder, private servis: RentACarService, private auth: AuthenticatService, 
    private router: Router) { 
    this.dodajServisForm = this.fb.group({
      naziv: ['', Validators.required],
      adresa: ['', Validators.required],
      opis: ['', Validators.required],
      lokacije: ['', Validators.required],
      korisnikId: this.auth.currentUser.id
    })
  }

  ngOnInit(): void {
  }

  dodaj() {
    this.rentacarModel = Object.assign({}, this.dodajServisForm.value);
    this.servis.postRentacarServis(this.rentacarModel).subscribe(() => {
      console.log('Uspjesno dodat servis');
      this.router.navigate(['/rentacarServices']);
    }, error => {
      console.log('Neuspjesno dodat servis');
    });
  }

  goBack() {
    window.history.back();
  }
}
