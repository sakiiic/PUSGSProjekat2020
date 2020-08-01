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
  from = '';
  to = '';
  search = "";
  displayedFlights: LetModel[];

  // Original extracted data
  dataSource: any;

  constructor(public service: LetService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public matDialog: MatDialog) {
    this.dataSource = new MatTableDataSource<LetModel>();
    console.log(this.activatedRoute.snapshot.params, 'paramss')
    if (this.activatedRoute.snapshot.params["id"])
      this.id = this.activatedRoute.snapshot.params["id"];
  }
/*
  ngOnInit(): void {
    this.service.getFlights(this.id)
      .subscribe((res: LetModel[]) => {
        this.dataSource = res;
        this.displayedFlights = this.dataSource;
        console.log(this.dataSource)
      })
  }*/

  ngOnInit(): void {
    this.service.getLetovi().subscribe(items => {
      this.dataSource = items;
      this.displayedFlights = this.dataSource;
      console.log("Loaded flights", this.dataSource);
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

  private filterByFromDate(query: LetModel[], dateStr = ""): LetModel[] {
    try {
      const date = new Date(dateStr);
      console.log("from", date);
      return query.filter(flight => new Date(flight.datumVrijemePolaska).getTime() >= date.getTime());
    } catch (ex) {
      console.warn(ex);
    }
    return query;
  }

  private filterByToDate(query: LetModel[], dateStr = ""): LetModel[] {
    try {
      const date = new Date(dateStr);
      console.log("to", date);
      return query.filter(flight => new Date(flight.datumVrijemePolaska).getTime() <= date.getTime());
    } catch (ex) {
      console.warn(ex);
    }
    return query;
  }

  private filterBySearchText(query: LetModel[], search = ""): LetModel[] {
    return query.filter(flight => {
      return flight.destinacija.toLowerCase().includes(search);
    });
  }

  onApplyFilter() {
    let query = this.dataSource;

    this.search.split(',').forEach(str => {
      const search = str.toLowerCase().trim();
      if (search) {
        query = this.filterBySearchText(query, search);
      }
    })

    if (this.from) {
      query = this.filterByFromDate(query, this.from);
    }

    if (this.to) {
      query = this.filterByToDate(query, this.to);
    }
    
    this.displayedFlights = query;
  }

}
