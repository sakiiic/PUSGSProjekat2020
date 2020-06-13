import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { MatTableDataSource } from '@angular/material/table';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DodajOcjenuServisComponent } from '../dodaj-ocjenu-servis/dodaj-ocjenu-servis.component';

@Component({
  selector: 'app-get-services',
  templateUrl: './get-services.component.html',
  styleUrls: ['./get-services.component.scss']
})
export class GetServicesComponent implements OnInit {

  displayedColumns = ['naziv', 'adresa', 'opis', 'ocjena', 'lokacije', 'vozila', 'ocijeni'];
  dataSource: any;

  constructor(public service: RentACarService, private activatedRoute: ActivatedRoute, public matDialog: MatDialog) {
    this.dataSource = new MatTableDataSource<RentACarModel>();
    console.log(this.activatedRoute.snapshot.params, 'paramss')
  }
  

  ngOnInit() {
    this.service.getRentACar()
         .subscribe((res: RentACarModel[]) => {
            console.log(res)
            this.dataSource = res;
            console.log(this.dataSource)
         })
  }

  openOcjenaModal(voziloId){
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(DodajOcjenuServisComponent, {
      width: '460px', 
      data: {voziloId: voziloId}
    });
  }

}
