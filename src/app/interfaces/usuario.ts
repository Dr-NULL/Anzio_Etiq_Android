import { TipoUsuario } from './tipo-usuario';

export interface Usuario {
    id: number;
    nick: string;
    firstName: string;
    lastName: string;
    tipoUsuario: TipoUsuario;
    email: string;
    token: string;
    dateCreation: Date;
}
