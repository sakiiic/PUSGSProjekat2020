import { Component, OnInit } from '@angular/core';
import { LetService } from 'src/app/services/let/let.service';
import { AviokompanijaService } from 'src/app/services/aviokompanija/aviokompanija.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { LetModel } from 'src/app/models/let.model';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReserveFlightComponent } from '../reserve-flight/reserve-flight.component';

@Component({
  selector: 'app-get-flights',
  templateUrl: './get-flights.component.html',
  styleUrls: ['./get-flights.component.scss']
})
export class GetFlightsComponent implements OnInit {

  id: any;
  p: Number = 1;
  count: Number = 4;
  startDate: string = '';
  endDate: string = '';

  // Original extracted data
  dataSource: any;
  dataSource2: any;

  constructor(public service: LetService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public matDialog: MatDialog) {
    this.dataSource = new MatTableDataSource<LetModel>();
    console.log(this.activatedRoute.snapshot.params, 'paramss')
    if (this.activatedRoute.snapshot.params["id"])
      this.id = this.activatedRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.service.getFlights(this.id)
      .subscribe((res: LetModel[]) => {
        console.log('aaaaaa', res)
        this.dataSource = res;
        console.log(this.dataSource)
      })
  }

  prikazi(form: NgForm) {
    let obj = {
      start: form.value.start,
      end: form.value.end
    }
    console.log(form.value.start)

    var datePipe = new DatePipe('en-US');
    this.startDate = datePipe.transform(obj.start, 'yyyy-MM-dd hh:mm:ss');
    this.endDate = datePipe.transform(obj.end, 'yyyy-MM-dd hh:mm:ss');

    this.service.getFlightDate(this.startDate, this.endDate, this.id).subscribe((ress: LetModel) => {
      this.dataSource2 = ress;
    });
  }

  openModal(letId) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ReserveFlightComponent, {
      width: '600px', 
      data: {letId: letId}
    });
  }

}
