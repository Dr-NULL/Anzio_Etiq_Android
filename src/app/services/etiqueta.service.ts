import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Etiqueta } from '../interfaces/etiqueta';

@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {
  constructor(private http: HttpClient) { }

  getByCodBarra(codBarra: string) {
    return this.http.get<Etiqueta>(
      'http://192.168.20.218/etiq/print/' + codBarra
    ).toPromise<Etiqueta>();
  }
}
