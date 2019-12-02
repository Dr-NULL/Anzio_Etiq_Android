import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

import { EtiquetaService } from '../../services/etiqueta.service';
import { Etiqueta } from '../../interfaces/etiqueta';

@Component({
  selector: 'app-zebra',
  templateUrl: './zebra.page.html',
  styleUrls: ['./zebra.page.scss'],
})
export class ZebraPage implements OnInit {
  @ViewChild('search', { static: false }) search: IonInput;
  public txtSearch = '';
  public txtTitle = 'Esperando búsqueda...';
  public data: Etiqueta = {
    id: null,
    producto: {
      id: null,
      codigo: '',
      descripc: {
        chinese: '',
        english: '',
        spanish: ''
      }
    },
    codBarra: '',
    contrato: '',
    familia: '',
    fecha: {
      faena: null,
      produc: null,
      vencim: null
    },
    peso: {
      bruto: null,
      neto: null
    },
    loteCertif: ''
  };

  constructor(public etiquServ: EtiquetaService) {}
  ngOnInit() {
    setTimeout(() => {
      this.search.setFocus();
    }, 500);
  }

  async onSearchKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      // Triggerear búsqueda
      await new Promise(resolve => {
        setTimeout(() => { resolve(); }, 500);
      });

      // Consultar
      const res = await this.etiquServ.getByCodBarra(this.txtSearch.trim());
      if (res != null) {
        this.txtTitle = 'Cod: ' + res.codBarra;
        this.data = res;

      } else {
        this.txtTitle = 'No encontrado...';
        this.data = {
          id: null,
          producto: {
            id: null,
            codigo: '',
            descripc: {
              chinese: '',
              english: '',
              spanish: ''
            }
          },
          loteCertif: '',
          codBarra: '',
          contrato: '',
          familia: '',
          fecha: {
            faena: null,
            produc: null,
            vencim: null
          },
          peso: {
            bruto: null,
            neto: null
          }
        };
      }

      this.txtSearch = '';
    }
  }
}
