import { Component, OnInit } from '@angular/core';
import { AviokompanijaService } from 'src/app/services/aviokompanija/aviokompanija.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AviokompanijaModel } from 'src/app/models/aviokompanija.model';
import { MatTableDataSource } from '@angular/material/table';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DeleteAviocompanyComponent } from '../delete-aviocompany/delete-aviocompany.component';

@Component({
  selector: 'app-get-aviocompany',
  templateUrl: './get-aviocompany.component.html',
  styleUrls: ['./get-aviocompany.component.scss']
})
export class GetAviocompanyComponent implements OnInit {

  displayedColumns = ['naziv', 'adresa', 'opis', 'ocjena', 'destinacije', 'letovi', 'izmijeni', 'obrisi'];
  dataSource: any;
  userId: any = this.auth.currentUser.id;
  aviokompanijaId: any;

  constructor(public service: AviokompanijaService, private activatedRoute: ActivatedRoute, private auth: AuthenticatService,
    public matDialog: MatDialog) {
      console.log(this.activatedRoute.snapshot)
    this.dataSource = new MatTableDataSource<AviokompanijaModel>();
     }

  ngOnInit(): void {
    this.service.getAviocompanyForCurrentUser(this.userId)
         .subscribe((res: AviokompanijaModel[]) => {
            console.log(res)
            this.dataSource = res;
            if (this.dataSource != '')
            {
              this.aviokompanijaId = this.dataSource[0].aviokompanijaId;
            }
            else 
            {
              this.aviokompanijaId = 0;
            }
         })
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(DeleteAviocompanyComponent, {
      width: '470px', 
      data: {aviokompanijaId: this.aviokompanijaId}
    });
  }

}
