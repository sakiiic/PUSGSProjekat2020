import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { VoziloModel } from 'src/app/models/vozilo.model';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { PotvrdiOtkazivanjeModalComponent } from '../potvrdi-otkazivanje-modal/potvrdi-otkazivanje-modal.component';
import { DodajOcjenuVoziloComponent } from '../dodaj-ocjenu-vozilo/dodaj-ocjenu-vozilo.component';

@Component({
  selector: 'app-get-reserved-cars',
  templateUrl: './get-reserved-cars.component.html',
  styleUrls: ['./get-reserved-cars.component.scss']
})
export class GetReservedCarsComponent implements OnInit {
  
  id: any;
  p: Number = 1;
  count: Number = 4;
  korisnikId: number;
  voziloId: number;

  // Original extracted data
  dataSource: any;

  constructor(public service: RentACarService,
    private activatedRoute: ActivatedRoute,
    private router: Router, private auth: AuthenticatService,
    public matDialog: MatDialog) {
      this.korisnikId = this.auth.currentUser.id;
  }

  ngOnInit(): void {
    this.service.getRezervisanaVozila(this.korisnikId).subscribe((res: any) =>
    {
      this.dataSource = res;
      this.voziloId = this.dataSource.voziloId;
    });
  }

  openOtkaziModal(voziloId){
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(PotvrdiOtkazivanjeModalComponent, {
      width: '460px', 
      data: {voziloId: voziloId}
    });
  }

  openOcjenaModal(voziloId){
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(DodajOcjenuVoziloComponent, {
      width: '460px', 
      data: {voziloId: voziloId}
    });
  }
}
