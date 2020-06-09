import { Component, OnInit } from '@angular/core';
import { AviokompanijaService } from 'src/app/services/aviokompanija/aviokompanija.service';
import { MatTableDataSource } from '@angular/material/table';
import { AviokompanijaModel } from 'src/app/models/aviokompanija.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalji-aviokompanija',
  templateUrl: './detalji-aviokompanija.component.html',
  styleUrls: ['./detalji-aviokompanija.component.scss']
})
export class DetaljiAviokompanijaComponent implements OnInit {

  id: any;
  p: Number = 1;
  count: Number = 4;

  dataSource: any;

  constructor(public service: AviokompanijaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.dataSource = new MatTableDataSource<AviokompanijaModel>();
    console.log(this.activatedRoute.snapshot.params, 'paramss')
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
