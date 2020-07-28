import { Component, OnInit } from '@angular/core';
import { LetService } from 'src/app/services/let/let.service';
import { LetModel } from 'src/app/models/let.model';
import { Router } from '@angular/router';
import { msToTimeString } from 'src/app/util/time';


@Component({
  selector: 'app-let-rezervacija',
  templateUrl: './let-rezervacija.component.html',
  styleUrls: ['./let-rezervacija.component.scss']
})

export class LetRezervacijaComponent implements OnInit {

  allFlights: any;
  displayedFlights: LetModel[];
  search = "";
  from = "";
  to = "";
  price: number;

  constructor(public letService: LetService, private router: Router) { }

  //ngOnInit(): void {}

  ngOnInit(): void {
    this.letService.getLetovi().subscribe(items => {
      this.allFlights = items;
      this.displayedFlights = this.allFlights;
      console.log("Loaded flights", this.allFlights);
    });
  }

  onApplyFilter() {
    let query = this.allFlights;

    this.search.split(',').forEach(str => {
      const search = str.toLowerCase().trim();
      if (search) {
        query = this.filterBySearchText(query, search);
      }
    })

    if (this.price) {
      query = this.filterByPrice(query, this.price);
    }

    if (this.from) {
      query = this.filterByFromDate(query, this.from);
    }
    if (this.to) {
      query = this.filterByToDate(query, this.to);
    }

    this.displayedFlights = query;
  }

  private filterBySearchText(query: LetModel[], search = ""): LetModel[] {
    return query.filter(flight => {
      return flight.destinacija.toLowerCase().includes(search);
    });
  }

  private filterByPrice(query: LetModel[], price: number): LetModel[] {
    return query.filter(flight => {
      return flight.cijenaKarte <= price;       
    });
  }

  private filterByFromDate(query: LetModel[], dateStr = ""): LetModel[] {
    try {
      const date = new Date(dateStr);
      console.log("from", date);
      return query.filter(flight => new Date(flight.datumVrijemePolaska).getTime() >= date.getTime());
    } catch (ex) {
      console.warn(ex);
    }
    return query;
  }

  private filterByToDate(query: LetModel[], dateStr = ""): LetModel[] {
    try {
      const date = new Date(dateStr);
      console.log("to", date);
      return query.filter(flight => new Date(flight.datumVrijemePolaska).getTime() <= date.getTime());
    } catch (ex) {
      console.warn(ex);
    }
    return query;
  }

}
