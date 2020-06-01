import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VoziloModel } from 'src/app/models/vozilo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {

  newVoziloForm: FormGroup;
  dataSource: any;
  vozilo: VoziloModel;
  izabranoVozilo: VoziloModel;
  vozila: Array<VoziloModel>;
  rentacarId: any;
  voziloId: any;

  constructor(private fb: FormBuilder, public service: RentACarService, private activatedRoute: ActivatedRoute) { 
    console.log(this.activatedRoute.snapshot.params, 'paramss')
    if (this.activatedRoute.snapshot.params["id"])
      this.rentacarId = this.activatedRoute.snapshot.params["id"];
    if(this.activatedRoute.snapshot.params["voziloId"])
      this.voziloId = this.activatedRoute.snapshot.params["voziloId"];
  }

  ngOnInit(): void {
    this.getRentacarInfo();
  }

  editVozilo() {
    this.newVoziloForm = this.fb.group({
      marka: ['', Validators.required],
      model: ['', Validators.required],
      godinaProizvodnje: ['', Validators.required],
      tipVozila: ['', Validators.required],
      brojSjedista: ['', Validators.required],
      cijena: ['', Validators.required],
      image: ['', Validators.required],
      tipGoriva: ['', Validators.required],
      transmisija: ['', Validators.required]
    });
  }

  getRentacarInfo(){
    this.service.getRentACar()
         .subscribe((res: RentACarModel[]) => {
            console.log(res)
            this.dataSource = res;
            console.log('aaaaaaaa',this.dataSource);
            this.vozila = this.dataSource[1].vozila;
            console.log('bbbbbb', this.vozila);
            this.izabranoVozilo = this.vozila[this.voziloId];
            console.log('zvvvvv', this.izabranoVozilo)
         })
  }

  edit(){
    this.vozilo = Object.assign({}, this.newVoziloForm.value);
    this.service.editVozilo(this.voziloId, this.vozilo).subscribe(() => {
      console.log('Uspjesno izmijenjeno vozilo');
    }, error => {
      console.log('Neuspjesno izmijenjeno vozilo');
    });
  }
}
