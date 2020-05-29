import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AviokompanijaComponent } from './components/aviokompanija/aviokompanija.component';
import { RentACarComponent } from './components/rent-acar/rent-acar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetaljiRentacarComponent } from './components/rent-acar/detalji-rentacar/detalji-rentacar.component';
import { DetaljiAviokompanijaComponent } from './components/aviokompanija/detalji-aviokompanija/detalji-aviokompanija.component';
import { DetaljiVozilaComponent } from './components/rent-acar/detalji-vozila/detalji-vozila.component';
import { DetaljiLetaComponent } from './components/aviokompanija/detalji-leta/detalji-leta.component';
import { LetRezervacijaComponent } from './components/let-rezervacija/let-rezervacija.component';
import { LetoviComponent } from './components/letovi/letovi.component';
import { AddNewCarComponent } from './components/rentacar-admin/add-new-car/add-new-car.component';
import { EditCarComponent } from './components/rentacar-admin/edit-car/edit-car.component';
import { AddNewFlightComponent } from './components/aviokompanija-admin/add-new-flight/add-new-flight.component';
import { EditFlightComponent } from './components/aviokompanija-admin/edit-flight/edit-flight.component';

export const routes: Routes = [
  //children: [ { path: 'vozila', component: VozilaComponent } ] 
  { path: '', component: HomePageComponent },
  { path: 'aviokompanije', component: AviokompanijaComponent },
  { path: 'rezervisiLet', component: LetRezervacijaComponent },
  { path: 'letovi', component: LetoviComponent },
  { path: 'rentacar', component: RentACarComponent},
  { path: 'rentacar/rentacarinfo/:id/vozila', component: DetaljiVozilaComponent},
  { path: 'rentacar/rentacarinfo/:id', component: DetaljiRentacarComponent},
  { path: 'aviokompanija/aviokompanijainfo/:id', component: DetaljiAviokompanijaComponent},
  { path: 'aviokompanija/aviokompanijainfo/:id/letovi', component: DetaljiLetaComponent},
  { path: 'addNewCar', component: AddNewCarComponent},
  { path: 'editCar', component: EditCarComponent},
  { path: 'addNewFlight', component: AddNewFlightComponent},
  { path: 'editFlight', component: EditFlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
