import { Component, OnInit } from '@angular/core';
import { AviokompanijaService } from 'src/app/services/aviokompanija/aviokompanija.service';
import { AviokompanijaModel } from 'src/app/models/aviokompanija.model';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aviokompanija',
  templateUrl: './aviokompanija.component.html',
  styleUrls: ['./aviokompanija.component.scss']
})
export class AviokompanijaComponent implements OnInit {

  displayedColumns = ['naziv', 'adresa', 'opis', 'ocjena', 'destinacije', 'letovi'];
  dataSource: any;
  public search = "";

  constructor(public service: AviokompanijaService, private activatedRoute: ActivatedRoute) {
    this.dataSource = new MatTableDataSource<AviokompanijaModel>();
    console.log(this.activatedRoute.snapshot.params, 'paramss')
  }

  ngOnInit() {
    this.fetchAvio();
  }

  fetchAvio(){
    this.service.getAviokompanija()
    .subscribe((res: AviokompanijaModel[]) => {
       console.log(res)
       this.dataSource = res;
       console.log(this.dataSource)
    });
  }
  private _filterBySearchText(
    usersToFilter: AviokompanijaModel[],
    searchText: string
  ): AviokompanijaModel[] {
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

  sortAvio(){
    
    this.service.getAviokompanija()
    .subscribe((res: AviokompanijaModel[]) => {
       const sorted = res.sort((a, b) => (a.naziv > b.naziv) ? 1 : -1)
       this.dataSource = sorted;
       console.log(this.dataSource)
    });
  }

}
