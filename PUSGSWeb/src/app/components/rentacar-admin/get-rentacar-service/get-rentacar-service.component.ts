import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { MatTableDataSource } from '@angular/material/table';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DeleteServiceModalComponent } from '../delete-service-modal/delete-service-modal.component';

@Component({
  selector: 'app-get-rentacar-service',
  templateUrl: './get-rentacar-service.component.html',
  styleUrls: ['./get-rentacar-service.component.scss']
})
export class GetRentacarServiceComponent implements OnInit {

  displayedColumns = ['naziv', 'adresa', 'opis', 'ocjena', 'lokacije', 'vozila', 'izmijeni', 'obrisi'];
  dataSource: any;
  userId: any = this.auth.currentUser.id;
  rentacarId: any;

  constructor(public service: RentACarService, private activatedRoute: ActivatedRoute, private auth: AuthenticatService,
    public matDialog: MatDialog) { 
      console.log(this.activatedRoute.snapshot)
    this.dataSource = new MatTableDataSource<RentACarModel>();
  }

  ngOnInit() {
    this.service.getRentaCarsForCurrentUser(this.userId)
         .subscribe((res: RentACarModel[]) => {
            console.log(res)
            this.dataSource = res;
            console.log('resssssss',this.dataSource)
            if (this.dataSource != '')
            {
              this.rentacarId = this.dataSource[0].rentacarId;
            }
            else 
            {
              this.rentacarId = 0;
            }
            console.log('aaaaaaaaaaaa', this.rentacarId)
         })
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(DeleteServiceModalComponent, {
      width: '470px', 
      data: {rentacarId: this.rentacarId}
    });
  }

}
