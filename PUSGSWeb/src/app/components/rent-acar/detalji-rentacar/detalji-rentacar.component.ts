import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { MatTableDataSource } from '@angular/material/table';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalji-rentacar',
  templateUrl: './detalji-rentacar.component.html',
  styleUrls: ['./detalji-rentacar.component.scss']
})
export class DetaljiRentacarComponent implements OnInit {

  id: any;
  p: Number = 1;
  count: Number = 4;

  // Original extracted data
  dataSource: any;

  constructor(public service: RentACarService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.dataSource = new MatTableDataSource<RentACarModel>();
    console.log(this.activatedRoute.snapshot.params, 'paramss')
    if (this.activatedRoute.snapshot.params["id"])
      this.id = this.activatedRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.service.getRentACarInfo(this.id)
      .subscribe((res: RentACarModel[]) => {
        console.log(res)
        this.dataSource = res;
        console.log(this.dataSource)
      })
  }
}
