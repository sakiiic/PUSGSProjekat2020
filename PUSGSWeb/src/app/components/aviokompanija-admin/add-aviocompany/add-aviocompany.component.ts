import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AviokompanijaDTOModel } from 'src/app/models/aviokompanijaDTO.model';
import { AviokompanijaService } from 'src/app/services/aviokompanija/aviokompanija.service';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-aviocompany',
  templateUrl: './add-aviocompany.component.html',
  styleUrls: ['./add-aviocompany.component.scss']
})
export class AddAviocompanyComponent implements OnInit {

  dodajServisForm: FormGroup;
  aviokompanijaModel: AviokompanijaDTOModel;

  constructor(private fb: FormBuilder, private servis: AviokompanijaService, private auth: AuthenticatService, 
    private router: Router) { 
      this.dodajServisForm = this.fb.group({
        naziv: ['', Validators.required],
        adresa: ['', Validators.required],
        opis: ['', Validators.required],
        destinacije: ['', Validators.required],
        korisnikId: this.auth.currentUser.id
      })
    }

  ngOnInit(): void {
  }

  dodaj() {
    this.aviokompanijaModel = Object.assign({}, this.dodajServisForm.value);
    this.servis.postAviocompany(this.aviokompanijaModel).subscribe(() => {
      console.log('Uspjesno dodat servis');
      this.router.navigate(['/aviocompany']);
    }, error => {
      console.log('Neuspjesno dodat servis');
    });
  }

  goBack() {
    window.history.back();
  }

}
