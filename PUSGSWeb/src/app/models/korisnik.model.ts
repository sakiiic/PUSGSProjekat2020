import { RoleModel } from './role.model';

export class KorisnikModel{
    id: number;
    userName: string;
    password: string;
    name: string;
    surname: string;
    email: string;
    city: string;
    number: string;
    street: string;
    dateOfBirth: Date;
    userRoles:RoleModel[];
}