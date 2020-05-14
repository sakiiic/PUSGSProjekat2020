import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { MatTableDataSource } from '@angular/material/table';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalji-rentacar',
  templateUrl: './detalji-rentacar.component.html',
  styleUrls: ['./detalji-rentacar.component.scss']
})
export class DetaljiRentacarComponent implements OnInit {

  displayedColumns = ['naziv', 'marka', 'model', 'godinaProizvodnje', 'brojSjedista', 'tipVozila', 'detalji'];
  dataSource: any;
  fuelType: Array<any>;
  transmission: Array<any>;
  carType: Array<any>;
  id: any;
  start_date_input;

  // Sub query filter
  query_input = '';

  // Transmission type filter
  trans_type = ['Transmisija', 'Manuelni', 'Automatik'];
  trans_type_input = this.trans_type[0];

  // Car type filter
  car_type = ['Marka', 'Peugeot', 'Mercedes', 'BMW', 'Toyota', 'Audi', 'Renault', 'Wolksvagen', 'Citroen'];
  car_type_input = this.car_type[0];

  // Fuel type filter
  fuel_type = ['Tip goriva', 'Benzin', 'Dizel'];
  fuel_type_input = this.fuel_type[0];

  // Sorting filter
  sort_by = ['Sortiraj', 'Cijena: Najniza do Najveca', 'Cijena: Najveca do najniza'];
  sort_by_input = this.sort_by[0];

  // Original extracted data
  details: any;

  // Filtered data from extracted data
  items: any[] = [];
  page = 1;

  // Todays 3 letter day for comparison
  day = (new Date()).toLocaleDateString('en', { weekday: 'short' }).toLowerCase();

  constructor(public service: RentACarService, 
    private activatedRoute: ActivatedRoute) { 
    this.dataSource = new MatTableDataSource<RentACarModel>();
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

    this.refreshDetails();
  }

  onChangeStartDate($event) {
    this.refreshDetails();
  }

  refreshDetails() {
    // Update path
    // let path = ['details'];
    // if (this.location_input && this.location_input.length > 0) {
    //   path = ['details', this.location_input, this.start_date_input];
    // }
    // this.router.navigate(path);

    // // Fetch data
    // this.api.getDetailsFor(this.location_input).subscribe((res) => {
    //   this.details = res;

    //   for (const item of this.details) {
    //     item.selected = false;
    //   }

    //   this.refreshItems();
    // });
  }

  onChangeQuery($event) {
    this.filter();
  }

  onChangeTransType($event) {
    this.filter();
  }

  onChangeCarType($event) {
    this.filter();
  }

  onChangeFuelType($event) {
    this.filter();
  }

  onChangeSortBy($event) {
    this.sort();
  }

  filter() {
    let newItems: any[] = [...this.details];

    if (this.query_input && this.query_input.length > 2) {
      const query = this.query_input.trim().toLowerCase();

      newItems = newItems.filter(x => x['marka'].toLowerCase().indexOf(query) > -1);
    }

    if (this.trans_type_input && this.trans_type_input !== this.trans_type[0]) {
      newItems = newItems.filter(x => x['transmisija'] === this.trans_type_input);
    }

    if (this.car_type_input && this.car_type_input !== this.car_type[0]) {
      newItems = newItems.filter(x => x['tipVozila'] === this.car_type_input);
    }

    if (this.fuel_type_input && this.fuel_type_input !== this.fuel_type[0]) {
      newItems = newItems.filter(x => x['tipGoriva'] === this.fuel_type_input);
    }

    this.items.length = 0;
    this.items.push(...newItems);
  }

  sort() {
    if (this.sort_by_input && this.sort_by_input !== this.sort_by[0]) {
      switch (this.sort_by_input) {
        case this.sort_by[1]:
          this.items.sort((x: any, y: any) => {
            const xn = x['cijena'];
            const yn = y['cijena'];

            if (xn > yn) {
              return 1;
            }
            if (xn < yn) {
              return -1;
            }
            return 0;
          });
          break;

        case this.sort_by[2]:
          this.items.sort((x: any, y: any) => {
            const xn = x['cijena'];
            const yn = y['cijena'];

            if (xn > yn) {
              return -1;
            }
            if (xn < yn) {
              return 1;
            }
            return 0;
          });
          break;

        default:
          break;
      }
    }

    this.items.sort((x: any, y: any) => {
      const xn = +this.isAvailable(x);
      const yn = +this.isAvailable(y);

      if (xn > yn) {
        return -1;
      }
      if (xn < yn) {
        return 1;
      }
      return 0;
    });
  }

  refreshItems() {
    this.filter();
    this.sort();
  }

  isAvailable(item) {
    if (item && item['availability'] && item['availability'].toLowerCase().indexOf(this.day) > -1) {
      return true;
    }
    return false;
  }
}
