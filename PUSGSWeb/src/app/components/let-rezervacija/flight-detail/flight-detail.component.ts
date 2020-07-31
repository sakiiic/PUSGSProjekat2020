import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LetService } from 'src/app/services/let/let.service';
import { LetModel } from 'src/app/models/let.model';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { UpdateFlightRequest } from '../entities/requests/update-flight-request';
//import userTypes from 'src/app/constants/user-types';
//import { UserService } from '../services/user.service';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss']
})
export class FlightDetailComponent implements OnInit {

  flight: any;
  id: number;

  constructor(private service: LetService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    this.service.getLetic(this.id).subscribe(result => {
      this.flight = result;
      console.log("My flight", this.flight);
    });
  }

}
