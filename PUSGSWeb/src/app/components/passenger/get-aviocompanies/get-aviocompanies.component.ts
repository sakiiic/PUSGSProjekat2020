import { Component, OnInit } from '@angular/core';
import { AviokompanijaService } from 'src/app/services/aviokompanija/aviokompanija.service';
import { MatTableDataSource } from '@angular/material/table';
import { AviokompanijaModel } from 'src/app/models/aviokompanija.model';
import { ActivatedRoute } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { OcijeniAviokompanijuComponent } from '../ocijeni-aviokompaniju/ocijeni-aviokompaniju.component';

@Component({
  selector: 'app-get-aviocompanies',
  templateUrl: './get-aviocompanies.component.html',
  styleUrls: ['./get-aviocompanies.component.scss']
})
export class GetAviocompaniesComponent implements OnInit {

  displayedColumns = ['naziv', 'adresa', 'opis', 'ocjena', 'destinacije', 'letovi', 'ocijeni'];
  dataSource: any;

  constructor(public service: AviokompanijaService, private activatedRoute: ActivatedRoute,public matDialog: MatDialog) {
    this.dataSource = new MatTableDataSource<AviokompanijaModel>();
    console.log(this.activatedRoute.snapshot.params, 'paramss')
  }
  

  ngOnInit() {
    this.service.getAviokompanija()
         .subscribe((res: AviokompanijaModel[]) => {
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
    const modalDialog = this.matDialog.open(OcijeniAviokompanijuComponent, {
      width: '460px', 
      data: {voziloId: voziloId}
    });
  }

}
