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
import { DetaljiLetaComponent } from './components/aviokompanija/detalji-leta/detalji-leta.component';
import { DetaljiVozilaComponent } from './components/rent-acar/detalji-vozila/detalji-vozila.component';
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
    DetaljiLetaComponent,
    DetaljiVozilaComponent,
    LetRezervacijaComponent,
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
    MatInputModule
  ],
  providers: [AuthenticatService, AlertifyService, BsModalRef, BsModalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
