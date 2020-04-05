import { Component, OnInit } from '@angular/core';
import { AviokompanijaService } from 'src/app/services/aviokompanija/aviokompanija.service';
import { AviokompanijaModel } from 'src/app/models/aviokompanija.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-aviokompanija',
  templateUrl: './aviokompanija.component.html',
  styleUrls: ['./aviokompanija.component.scss']
})
export class AviokompanijaComponent implements OnInit {

  displayedColumns = ['naziv', 'adresa', 'opis', 'ocjena', 'destinacije'];
  dataSource: any;

  constructor(public service: AviokompanijaService) { 
    this.dataSource = new MatTableDataSource<AviokompanijaModel>();
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
