import { VoziloModel } from './vozilo.model';

export class RentACarModel{
    rentacarId: number;
    naziv: string;
    adresa: string;
    opis: string;
    ocjena: number;
    vozila: Array<VoziloModel>;
    lokacije: Array<string>;
}