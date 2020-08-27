import { RoleModel } from './role.model';

export class KorisnikModel{
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    number: string;
    street: string;
    dateOfBirth: Date;
    userRoles:RoleModel[];
}