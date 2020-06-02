import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AviokompanijaComponent } from './components/aviokompanija/aviokompanija.component';
import { RentACarComponent } from './components/rent-acar/rent-acar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetaljiRentacarComponent } from './components/rent-acar/detalji-rentacar/detalji-rentacar.component';
import { DetaljiAviokompanijaComponent } from './components/aviokompanija/detalji-aviokompanija/detalji-aviokompanija.component';
import { DetaljiLetaComponent } from './components/aviokompanija/detalji-leta/detalji-leta.component';
import { LetRezervacijaComponent } from './components/let-rezervacija/let-rezervacija.component';
import { LetoviComponent } from './components/letovi/letovi.component';
import { AddNewCarComponent } from './components/rentacar-admin/add-new-car/add-new-car.component';
import { EditCarComponent } from './components/rentacar-admin/edit-car/edit-car.component';
import { GetRentacarServiceComponent } from './components/rentacar-admin/get-rentacar-service/get-rentacar-service.component';
import { EditRentacarServiceComponent } from './components/rentacar-admin/edit-rentacar-service/edit-rentacar-service.component';
import { CarDetailsComponent } from './components/rentacar-admin/car-details/car-details.component';
import { AddRentacarServiceComponent } from './components/rentacar-admin/add-rentacar-service/add-rentacar-service.component';
import { AddNewFlightComponent } from './components/aviokompanija-admin/add-new-flight/add-new-flight.component';
import { EditFlightComponent } from './components/aviokompanija-admin/edit-flight/edit-flight.component';

export const routes: Routes = [
  //children: [ { path: 'vozila', component: VozilaComponent } ] 
  { path: '', component: HomePageComponent },
  { path: 'aviokompanije', component: AviokompanijaComponent },
  { path: 'rezervisiLet', component: LetRezervacijaComponent },
  { path: 'letovi', component: LetoviComponent },
  { path: 'rentacar', component: RentACarComponent},
  { path: 'rentacar/rentacarinfo/:id', component: DetaljiRentacarComponent},
  { path: 'aviokompanija/aviokompanijainfo/:id', component: DetaljiAviokompanijaComponent},
  { path: 'aviokompanija/aviokompanijainfo/:id/letovi', component: DetaljiLetaComponent},
  { path: 'rentacarService/addNewCar', component: AddNewCarComponent},
  { path: 'rentacarService/editCar/:id', component: EditCarComponent},
  { path: 'rentacarServices', component: GetRentacarServiceComponent},
  { path: 'editRentacarService/:id', component: EditRentacarServiceComponent},
  { path: 'rentacarService/carDetails/:id', component: CarDetailsComponent},
  { path: 'addRentacarService', component: AddRentacarServiceComponent },
  { path: 'addNewFlight', component: AddNewFlightComponent },
  { path: 'aviokompanijaServices/editFlight/:id', component: EditFlightComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
