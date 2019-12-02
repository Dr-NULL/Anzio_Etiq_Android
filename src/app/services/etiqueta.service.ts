import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { serverUrl, headers } from '../global';
import { Etiqueta } from '../interfaces/etiqueta';

@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {
  constructor(private http: HttpClient) { }

  getByCodBarra(codBarra: string) {
    return this.http.get<Etiqueta>(
      serverUrl + 'etiq/print/' + codBarra,
      {
        headers: headers()
      }
    ).toPromise<Etiqueta>();
  }
}
