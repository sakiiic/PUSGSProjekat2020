import { Component, OnInit } from '@angular/core';
import { AviokompanijaService } from 'src/app/services/aviokompanija/aviokompanija.service';
import { LetService } from 'src/app/services/let/let.service';
import { MatTableDataSource } from '@angular/material/table';
import { AviokompanijaModel } from 'src/app/models/aviokompanija.model';
import { LetModel } from 'src/app/models/let.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-detalji-aviokompanija',
  templateUrl: './detalji-aviokompanija.component.html',
  styleUrls: ['./detalji-aviokompanija.component.scss']
})
export class DetaljiAviokompanijaComponent implements OnInit {

  id: any;
  p: Number = 1;
  count: Number = 4;
  startDate: string = '';
  endDate: string = '';

  dataSource: any;
  dataSource2: any;

  constructor(public service: AviokompanijaService,
    public service2: LetService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public matDialog: MatDialog) {
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

  prikazi(form: NgForm) {
    let obj = {
      start: form.value.start,
      end: form.value.end
    }
    console.log(form.value.start)

    var datePipe = new DatePipe('en-US');
    this.startDate = datePipe.transform(obj.start, 'yyyy-MM-dd hh:mm:ss');
    this.endDate = datePipe.transform(obj.end, 'yyyy-MM-dd hh:mm:ss');

    this.service2.getFlightDate(this.startDate, this.endDate, this.id).subscribe((ress: LetModel) => {
      this.dataSource2 = ress;
    });
  }

}
