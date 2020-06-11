import { Component, OnInit } from '@angular/core';
import { LetService } from 'src/app/services/let/let.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { LetModel } from 'src/app/models/let.model';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CancelReservationComponent } from '../cancel-reservation/cancel-reservation.component';

@Component({
  selector: 'app-get-reserved-flights',
  templateUrl: './get-reserved-flights.component.html',
  styleUrls: ['./get-reserved-flights.component.scss']
})
export class GetReservedFlightsComponent implements OnInit {

  id: any;
  p: Number = 1;
  count: Number = 4;
  korisnikId: number;
  letId: number;

  // Original extracted data
  dataSource: any;

  constructor(public service: LetService,
    private activatedRoute: ActivatedRoute,
    private router: Router, private auth: AuthenticatService,
    public matDialog: MatDialog) {
      this.korisnikId = this.auth.currentUser.id;
  }

  ngOnInit(): void {
    this.service.getRezervisaniLetovi(this.korisnikId).subscribe((res: any) =>
    {
      this.dataSource = res;
      this.letId = this.dataSource.letId;
    });
  }

  openOtkaziModal(letId){
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(CancelReservationComponent, {
      width: '460px', 
      data: {letId: letId}
    });
  }

}
