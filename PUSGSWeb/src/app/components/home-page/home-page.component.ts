import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  modalRef: BsModalRef;
  
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModalLogin() {
    this.modalRef = this.modalService.show(LoginComponent);
  }

  openModalRegister() {
    this.modalRef = this.modalService.show(RegisterComponent);
  }
}
