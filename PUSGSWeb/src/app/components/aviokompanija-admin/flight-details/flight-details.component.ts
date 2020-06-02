import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AviokompanijaService } from 'src/app/services/aviokompanija/aviokompanija.service';
import { MatTableDataSource } from '@angular/material/table';
import { AviokompanijaModel } from 'src/app/models/aviokompanija.model';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DeleteFlightComponent } from '../delete-flight/delete-flight.component';


@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

  displayedColumns = ['datumVrijemePolaska', 'datumVrijemeDolaska', 'vrijemePutovanja', 'duzinaPutovanja', 'brojPresjedanja', 'lokacijePresjedanja', 'cijenaKarte'];
  letId: any;
  aviokompanijaId: any;
  dataSource: any;

  constructor(public service: AviokompanijaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public matDialog: MatDialog) { 
      this.dataSource = new MatTableDataSource<AviokompanijaModel>();
    if (this.activatedRoute.snapshot.params["id"])
      this.aviokompanijaId = this.activatedRoute.snapshot.params["id"];
    }

  ngOnInit(): void {
    this.service.getAviokompanijaInfo(this.aviokompanijaId)
      .subscribe((res: AviokompanijaModel[]) => {
        console.log(res)
        this.dataSource = res;
        console.log(this.dataSource)
      })
  }

  openModal(id) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(DeleteFlightComponent, {
      width: '470px', 
      data: {aviokompanijaId: id}
    });
    console.log('Ovo je id ', id)
  }

}
