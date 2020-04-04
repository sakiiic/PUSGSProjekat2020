import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AviokompanijaComponent } from './components/aviokompanija/aviokompanija.component';
import { RentACarComponent } from './components/rent-acar/rent-acar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VozilaComponent } from './components/vozila/vozila.component';


const routes: Routes = [
  //children: [ { path: 'vozila', component: VozilaComponent } ] 
  { path: '', component: HomePageComponent },
  { path: 'aviokompanije', component: AviokompanijaComponent },
  { path: 'rentacar', component: RentACarComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'rentacar/vozila', component: VozilaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
