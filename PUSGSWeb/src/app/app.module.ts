import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AviokompanijaComponent } from './components/aviokompanija/aviokompanija.component';
import { RentACarComponent } from './components/rent-acar/rent-acar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DetaljiRentacarComponent } from './components/rent-acar/detalji-rentacar/detalji-rentacar.component';
import { DetaljiAviokompanijaComponent } from './components/aviokompanija/detalji-aviokompanija/detalji-aviokompanija.component';
import { AuthenticatService } from './services/authentication/authentication.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify/alertify.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { routes } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { LetRezervacijaComponent } from './components/let-rezervacija/let-rezervacija.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { LetoviComponent } from './components/letovi/letovi.component';
import { AddNewCarComponent } from './components/rentacar-admin/add-new-car/add-new-car.component';
import { GetRentacarServiceComponent } from './components/rentacar-admin/get-rentacar-service/get-rentacar-service.component';
import { CarDetailsComponent } from './components/rentacar-admin/car-details/car-details.component';
import { AddRentacarServiceComponent } from './components/rentacar-admin/add-rentacar-service/add-rentacar-service.component';
import { DeleteCarModalComponent } from './components/rentacar-admin/delete-car-modal/delete-car-modal.component';
import { DeleteServiceModalComponent } from './components/rentacar-admin/delete-service-modal/delete-service-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddNewFlightComponent } from './components/aviokompanija-admin/add-new-flight/add-new-flight.component';
import { EditFlightComponent } from './components/aviokompanija-admin/edit-flight/edit-flight.component';
import { AddAviocompanyComponent } from './components/aviokompanija-admin/add-aviocompany/add-aviocompany.component';
import { FlightDetailsComponent } from './components/aviokompanija-admin/flight-details/flight-details.component';
import { DeleteFlightComponent } from './components/aviokompanija-admin/delete-flight/delete-flight.component';
import { DeleteAviocompanyComponent } from './components/aviokompanija-admin/delete-aviocompany/delete-aviocompany.component';
import { EditAviocompanyComponent } from './components/aviokompanija-admin/edit-aviocompany/edit-aviocompany.component';
import { GetAviocompanyComponent } from './components/aviokompanija-admin/get-aviocompany/get-aviocompany.component';
import { EditCarModalComponent } from './components/rentacar-admin/edit-car-modal/edit-car-modal.component';
import { EditServiceModalComponent } from './components/rentacar-admin/edit-service-modal/edit-service-modal.component';
import { FindCarModalComponent } from './components/passenger/find-car-modal/find-car-modal.component';
import { GetCarsComponent } from './components/passenger/get-cars/get-cars.component';
import { GetReservedCarsComponent } from './components/passenger/get-reserved-cars/get-reserved-cars.component';
import { GetServicesComponent } from './components/passenger/get-services/get-services.component';
import { ReserveCarModalComponent } from './components/passenger/reserve-car-modal/reserve-car-modal.component';
import { PotvrdiOtkazivanjeModalComponent } from './components/passenger/potvrdi-otkazivanje-modal/potvrdi-otkazivanje-modal.component';
import { KorisnikComponent } from './components/korisnik/korisnik.component';
import { EditKorisnikComponent } from './components/korisnik/edit-korisnik/edit-korisnik.component';
import { VozilaComponent } from './components/vozila/vozila.component';

export function getToken() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent,
    AviokompanijaComponent,
    RentACarComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    DetaljiRentacarComponent,
    DetaljiAviokompanijaComponent,
    LetRezervacijaComponent,
    LetoviComponent,
    AddNewCarComponent,
    GetRentacarServiceComponent,
    CarDetailsComponent,
    AddRentacarServiceComponent,
    DeleteCarModalComponent,
    DeleteServiceModalComponent,
    AddNewFlightComponent,
    EditFlightComponent,
    AddAviocompanyComponent,
    FlightDetailsComponent,
    DeleteFlightComponent,
    DeleteAviocompanyComponent,
    EditAviocompanyComponent,
    GetAviocompanyComponent,

    EditCarModalComponent,
    EditServiceModalComponent,
    FindCarModalComponent,
    GetCarsComponent,
    GetReservedCarsComponent,
    GetServicesComponent,
    ReserveCarModalComponent,
    PotvrdiOtkazivanjeModalComponent,
    KorisnikComponent,
    EditKorisnikComponent,
    VozilaComponent
  ],
  imports: [ 
    MbscModule,  
    BrowserModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
         tokenGetter: getToken,
         whitelistedDomains: ['localhost:5000'],
         blacklistedRoutes: ['localhost:5000/api/authorization']
      }
    }),
    MatTableModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NoopAnimationsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(routes),
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot(),
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [AuthenticatService, AlertifyService, BsModalRef, BsModalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
