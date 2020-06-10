import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { VoziloModel } from 'src/app/models/vozilo.model';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-vozila',
  templateUrl: './vozila.component.html',
  styleUrls: ['./vozila.component.scss']
})
export class VozilaComponent implements OnInit {

  displayedColumns = ['marka', 'model', 'godinaProizvodnje', 'brojSjedista', 'tipVozila', 'slobodno', 'tipGoriva', 'transmisija', 'image', 'cijena', 'rez'];
  dataSource: any;

  constructor(public service: RentACarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public matDialog: MatDialog) {

      this.dataSource = new MatTableDataSource<VoziloModel>();
     }

  ngOnInit(): void {
    // this.service.getVozila()
    //      .subscribe((res: VoziloModel[]) => {
    //         console.log(res)
    //         this.dataSource = res;
    //         console.log(this.dataSource)
    //      })
  }

}
