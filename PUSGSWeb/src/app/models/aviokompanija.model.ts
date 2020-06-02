import { LetModel } from './let.model';

export class AviokompanijaModel {
    aviokompanijaId: number;
    naziv: string;
    adresa: string;
    opis: string;
    ocjena: number;
    letovi: Array<LetModel>;
    destinacije: Array<string>;
}