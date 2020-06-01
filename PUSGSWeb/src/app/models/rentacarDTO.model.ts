import { VoziloModel } from './vozilo.model';

export class RentacarDTOModel {
    constructor(){
        this.naziv = null;
        this.lokacije = null;
        this.adresa = null;
        this.opis = null;
        this.korisnikId = null;
    }
    
    naziv: string;
    adresa: string;
    opis: string;
    lokacije: Array<string>;
    korisnikId: number;
}