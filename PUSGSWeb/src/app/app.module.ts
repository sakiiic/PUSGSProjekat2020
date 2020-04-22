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
import { HttpClientModule } from '@angular/common/http';
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
import { AuthService } from './services/authentication/authentication.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify/alertify.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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
    DetaljiVozilaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AlertifyService, BsModalRef, BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
