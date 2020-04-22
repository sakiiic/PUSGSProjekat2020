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


const routes: Routes = [
  //children: [ { path: 'vozila', component: VozilaComponent } ] 
  { path: '', component: HomePageComponent },
  { path: 'aviokompanije', component: AviokompanijaComponent },
  { path: 'rentacar', component: RentACarComponent},
  { path: 'rentacar/rentacarinfo/:id/vozila', component: DetaljiVozilaComponent},
  { path: 'rentacar/rentacarinfo/:id', component: DetaljiRentacarComponent},
  { path: 'aviokompanija/aviokompanijainfo/:id', component: DetaljiAviokompanijaComponent},
  { path: 'aviokompanija/aviokompanijainfo/:id/letovi', component: DetaljiLetaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
