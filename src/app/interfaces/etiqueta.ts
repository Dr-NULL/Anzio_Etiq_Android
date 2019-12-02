import { Producto } from './producto';

export interface Etiqueta {
    id: number;
    codBarra: string;
    familia: string;
    peso: Peso;
    fecha: Fecha;
    producto: Producto;
    loteCertif: string;
    contrato: string;
}

export interface Peso {
    bruto: number;
    neto: number;
}

export interface Fecha {
    faena: Date;
    produc: Date;
    vencim: Date;
    impres?: Date;
}
