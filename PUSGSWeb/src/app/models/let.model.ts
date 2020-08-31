import { FlightSeat } from './flightSeat';
import { FlightSeatDTO } from './flightSeatDTO';

export class LetModel{
    letId: number;
    destinacija: string;
    datumVrijemePolaska: Date;
    datumVrijemeDolaska: Date;
    datumVrijemePovratka: Date;
    vrijemePutovanja: string;
    duzinaPutovanja: string;
    brojPresjedanja: number;
    lokacijePresjedanja: Array<string>;
    cijenaKarte: number;
    aviokompanijaId: number;
    seats: FlightSeat[];
}