import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rent-acar',
  templateUrl: './rent-acar.component.html',
  styleUrls: ['./rent-acar.component.scss']
})
export class RentACarComponent implements OnInit {

  displayedColumns = ['naziv', 'adresa', 'opis', 'ocjena', 'lokacije', 'vozila'];
  dataSource: any;

  constructor(public service: RentACarService) {
    this.dataSource = new MatTableDataSource<RentACarModel>();
  }

  ngOnInit() {
    this.service.getRentACar()
         .subscribe((res: RentACarModel[]) => {
            console.log(res)
            this.dataSource = res;
            console.log(this.dataSource)
         })
  }

}
