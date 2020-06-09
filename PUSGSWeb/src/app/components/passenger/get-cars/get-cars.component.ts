import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { VoziloModel } from 'src/app/models/vozilo.model';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReserveCarModalComponent } from '../reserve-car-modal/reserve-car-modal.component';

@Component({
  selector: 'app-get-cars',
  templateUrl: './get-cars.component.html',
  styleUrls: ['./get-cars.component.scss']
})
export class GetCarsComponent implements OnInit {

  id: any;
  p: Number = 1;
  count: Number = 4;
  startDate: string = '';
  endDate: string = '';

  // Original extracted data
  dataSource: any;
  dataSource2: any;

  constructor(public service: RentACarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public matDialog: MatDialog) {
    this.dataSource = new MatTableDataSource<VoziloModel>();
    console.log(this.activatedRoute.snapshot.params, 'paramss')
    if (this.activatedRoute.snapshot.params["id"])
      this.id = this.activatedRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.service.getVozila(this.id)
      .subscribe((res: VoziloModel[]) => {
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

    this.service.getVozilaDate(this.startDate, this.endDate, this.id).subscribe((ress: VoziloModel) => {
      this.dataSource2 = ress;
    });
  }

  openModal(voziloId) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ReserveCarModalComponent, {
      width: '600px', 
      data: {voziloId: voziloId}
    });
  }

}
