import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AviokompanijaComponent } from './components/aviokompanija/aviokompanija.component';
import { RentACarComponent } from './components/rent-acar/rent-acar.component';
import { DetaljiRentacarComponent } from './components/rent-acar/detalji-rentacar/detalji-rentacar.component';
import { DetaljiAviokompanijaComponent } from './components/aviokompanija/detalji-aviokompanija/detalji-aviokompanija.component';
import { LetRezervacijaComponent } from './components/let-rezervacija/let-rezervacija.component';
import { LetoviComponent } from './components/letovi/letovi.component';
import { AddNewCarComponent } from './components/rentacar-admin/add-new-car/add-new-car.component';
import { GetRentacarServiceComponent } from './components/rentacar-admin/get-rentacar-service/get-rentacar-service.component';
import { CarDetailsComponent } from './components/rentacar-admin/car-details/car-details.component';
import { AddRentacarServiceComponent } from './components/rentacar-admin/add-rentacar-service/add-rentacar-service.component';
import { AddNewFlightComponent } from './components/aviokompanija-admin/add-new-flight/add-new-flight.component';
import { EditFlightComponent } from './components/aviokompanija-admin/edit-flight/edit-flight.component';
import { GetAviocompanyComponent } from './components/aviokompanija-admin/get-aviocompany/get-aviocompany.component';
import { EditAviocompanyComponent } from './components/aviokompanija-admin/edit-aviocompany/edit-aviocompany.component';
import { FlightDetailsComponent } from './components/aviokompanija-admin/flight-details/flight-details.component';
import { AddAviocompanyComponent } from './components/aviokompanija-admin/add-aviocompany/add-aviocompany.component';
import { GetCarsComponent } from './components/passenger/get-cars/get-cars.component';
import { GetReservedCarsComponent } from './components/passenger/get-reserved-cars/get-reserved-cars.component';
import { GetServicesComponent } from './components/passenger/get-services/get-services.component';
import { ReserveCarModalComponent } from './components/passenger/reserve-car-modal/reserve-car-modal.component';
import { KorisnikComponent } from './components/korisnik/korisnik.component';
import { EditKorisnikComponent } from './components/korisnik/edit-korisnik/edit-korisnik.component';
import { VozilaComponent } from './components/vozila/vozila.component';
import { GetAdmininfoComponent } from './components/rentacar-admin/get-admininfo/get-admininfo.component';
import { EditAdmininfoComponent } from './components/rentacar-admin/edit-admininfo/edit-admininfo.component';
import { GetAviocompaniesComponent} from './components/passenger/get-aviocompanies/get-aviocompanies.component';
import { GetFlightsComponent } from './components/passenger/get-flights/get-flights.component'; 
import { GetReservedFlightsComponent } from './components/passenger/get-reserved-flights/get-reserved-flights.component';
import { FlightDetailComponent } from './components/let-rezervacija/flight-detail/flight-detail.component';
import { ReservationComponent } from './components/let-rezervacija/reservation/reservation.component';
import { UsersComponent } from './components/users/users.component';
import { InvitationsComponent } from './components/let-rezervacija/invitations/invitations.component';
import { AcceptInvitationComponent } from './components/let-rezervacija/accept-invitation/accept-invitation.component';
import { DeclineInvitationComponent } from './components/let-rezervacija/decline-invitation/decline-invitation.component';

export const routes: Routes = [
  //children: [ { path: 'vozila', component: VozilaComponent } ] 
  { path: '', component: HomePageComponent },
  { path: 'aviokompanija', component: AviokompanijaComponent },
  { path: 'rezervisiLet', component: LetRezervacijaComponent },
  { path: 'letovi', component: LetoviComponent },
  { path: 'vozila', component: VozilaComponent },
  { path: 'rentacar', component: RentACarComponent},
  { path: 'rentacar/rentacarinfo/:id', component: DetaljiRentacarComponent},
  { path: 'aviokompanija/aviokompanijainfo/:id', component: DetaljiAviokompanijaComponent},
  { path: 'rentacarService/addNewCar', component: AddNewCarComponent},
  { path: 'rentacarServices', component: GetRentacarServiceComponent},
  { path: 'rentacarService/carDetails/:id', component: CarDetailsComponent},
  { path: 'addRentacarService', component: AddRentacarServiceComponent },
  { path: 'addNewFlight/:aviokompanijaId', component: AddNewFlightComponent },
  { path: 'aviocompany', component: GetAviocompanyComponent},
  { path: 'aviocompany/flightDetails/:id', component: FlightDetailsComponent},
  { path: 'addAviocompany', component: AddAviocompanyComponent },
  { path: 'getCars/:id', component: GetCarsComponent },
  { path: 'getReservedCars', component: GetReservedCarsComponent },
  { path: 'getServices', component: GetServicesComponent },
  { path: 'rezervacija', component: ReserveCarModalComponent},
  { path: 'korisnik', component: KorisnikComponent },
  { path: 'getAviocompanies', component: GetAviocompaniesComponent },
  { path: 'getFlights/:id', component: GetFlightsComponent },
  { path: 'getReservedFlights', component: GetReservedFlightsComponent },
  { path: "flight/:id", component: FlightDetailComponent },
  { path: "getFlights", component: GetFlightsComponent }, 
  { path: "flight/:id/reservation/:seatNumber", component: ReservationComponent },
  { path: "users", component: UsersComponent },
  { path: "invitations", component: InvitationsComponent },
  { path: "acceptInvitations/:id", component: AcceptInvitationComponent },
  { path: "declineInvitations/:id", component: DeclineInvitationComponent },

  { path: 'izmijeniKorisnika', component: EditKorisnikComponent },
  { path: 'getAdminInfo', component: GetAdmininfoComponent },
  { path: 'editAdminInfo', component: EditAdmininfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
