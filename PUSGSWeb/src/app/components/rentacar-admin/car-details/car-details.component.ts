import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { MatTableDataSource } from '@angular/material/table';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DeleteCarModalComponent } from '../delete-car-modal/delete-car-modal.component';
import { EditCarModalComponent } from '../edit-car-modal/edit-car-modal.component';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  displayedColumns = ['naziv', 'marka', 'model', 'godinaProizvodnje', 'brojSjedista', 'tipVozila', 'detalji'];
  voziloId: any;
  rentacarId: any;
  p: Number = 1;
  count: Number = 4;

  // Original extracted data
  dataSource: any;

  constructor(public service: RentACarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public matDialog: MatDialog) {
    this.dataSource = new MatTableDataSource<RentACarModel>();
    if (this.activatedRoute.snapshot.params["id"])
       this.rentacarId = this.activatedRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.service.getRentACarInfo(this.rentacarId)
      .subscribe((res: RentACarModel[]) => {
        console.log(res)
        this.dataSource = res;
        console.log(this.dataSource)
      })
  }

  openDeleteModal(id) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(DeleteCarModalComponent, {
      width: '470px', 
      data: {rentacarId: id}
    });
  }

  openEditModal(id) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(EditCarModalComponent, {
      width: '600px', 
      data: {rentacarId: this.rentacarId, voziloId: id}
    });
  }
}
