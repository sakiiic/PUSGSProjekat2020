import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { RentACarModel } from 'src/app/models/rentACar.model';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rent-acar',
  templateUrl: './rent-acar.component.html',
  styleUrls: ['./rent-acar.component.scss']
})
export class  RentACarComponent implements OnInit {

  displayedColumns = ['naziv', 'adresa', 'opis', 'ocjena', 'lokacije', 'vozila'];
  dataSource: any;
  public search = "";

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

  private _filterBySearchText(
    usersToFilter: RentACarModel[],
    searchText: string
  ): RentACarModel[] {
    return usersToFilter.filter((element) => {  
      
      if(element.naziv !== null){
        if (element.naziv.toLowerCase().includes(searchText)) {
          return true;
        }
      }

      return false;
    });
  }

  onSubmit(): void {
    const searchText = this.search.toLowerCase();
    let filteredList = this._filterBySearchText(this.dataSource, searchText);

    if(searchText === "")
    {
      this.ngOnInit();
    }
    
    this.dataSource = filteredList;
  }

  sortRC(){  
    this.service.getRentACar()
    .subscribe((res: RentACarModel[]) => {
       const sorted = res.sort((a, b) => (a.naziv > b.naziv) ? 1 : -1)
       this.dataSource = sorted;
       console.log(this.dataSource)
    });
  }

}
