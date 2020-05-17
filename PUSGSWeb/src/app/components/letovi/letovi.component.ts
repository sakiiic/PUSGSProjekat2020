import { Component, OnInit } from '@angular/core';
import { LetService } from 'src/app/services/let/let.service';
import { LetModel } from 'src/app/models/let.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-letovi',
  templateUrl: './letovi.component.html',
  styleUrls: ['./letovi.component.scss']
})
export class LetoviComponent implements OnInit {

  displayedColumns = ['datumVrijemePolaska', 'datumVrijemeDolaska', 'vrijemePutovanja', 'duzinaPutovanja', 'brojPresjedanja', 'lokacijePresjedanja', 'cijenaKarte'];
  dataSource: any;

  constructor(public service: LetService) { 
    this.dataSource = new MatTableDataSource<LetModel>();
  }

  ngOnInit(): void {
    this.service.getLetovi()
         .subscribe((res: LetModel[]) => {
            console.log(res)
            this.dataSource = res;
            console.log(this.dataSource)
         })
  }

}
