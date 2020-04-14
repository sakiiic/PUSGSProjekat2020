import { Component, OnInit } from '@angular/core';
import { AviokompanijaService } from 'src/app/services/aviokompanija/aviokompanija.service';
import { ActivatedRoute } from '@angular/router';
import { AviokompanijaModel } from 'src/app/models/aviokompanija.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-detalji-aviokompanija',
  templateUrl: './detalji-aviokompanija.component.html',
  styleUrls: ['./detalji-aviokompanija.component.scss']
})
export class DetaljiAviokompanijaComponent implements OnInit {

  displayedColumns = ['datumVrijemePolaska', 'datumVrijemeDolaska', 'vrijemePutovanja', 
  'duzinaPutovanja', 'brojPresjedanja', 'lokacijePresjedanja', 'cijenaKarte', 'detalji'];
  dataSource: any;
  id: any;

  constructor(public service: AviokompanijaService, 
    private activatedRoute: ActivatedRoute) { 
      this.dataSource = new MatTableDataSource<AviokompanijaModel>();
      if (this.activatedRoute.snapshot.params["id"])
        this.id = this.activatedRoute.snapshot.params["id"];
    }

  ngOnInit(): void {
    this.service.getAviokompanijaInfo(this.id)
         .subscribe((res: AviokompanijaModel[]) => {
            console.log(res)
            this.dataSource = res;
            console.log(this.dataSource)
         })
  }

}
