import { Component, OnInit } from '@angular/core';
import { AviokompanijaService } from 'src/app/services/aviokompanija/aviokompanija.service';
import { MatTableDataSource } from '@angular/material/table';
import { AviokompanijaModel } from 'src/app/models/aviokompanija.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-aviocompanies',
  templateUrl: './get-aviocompanies.component.html',
  styleUrls: ['./get-aviocompanies.component.scss']
})
export class GetAviocompaniesComponent implements OnInit {

  displayedColumns = ['naziv', 'adresa', 'opis', 'ocjena', 'destinacije', 'letovi'];
  dataSource: any;

  constructor(public service: AviokompanijaService, private activatedRoute: ActivatedRoute) {
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

}
