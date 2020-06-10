import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { MatTableDataSource } from '@angular/material/table';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-services',
  templateUrl: './get-services.component.html',
  styleUrls: ['./get-services.component.scss']
})
export class GetServicesComponent implements OnInit {

  displayedColumns = ['naziv', 'adresa', 'opis', 'ocjena', 'lokacije', 'vozila'];
  dataSource: any;

  constructor(public service: RentACarService, private activatedRoute: ActivatedRoute) {
    this.dataSource = new MatTableDataSource<RentACarModel>();
    console.log(this.activatedRoute.snapshot.params, 'paramss')
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
