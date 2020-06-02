import { LetModel } from './let.model';

export class AviokompanijaDTOModel {
    constructor(){
        this.naziv = null;
        this.destinacije = null;
        this.adresa = null;
        this.opis = null;
        this.korisnikId = null;
    }
    
    naziv: string;
    adresa: string;
    opis: string;
    destinacije: Array<string>;
    korisnikId: number;
}