import { Component } from '@angular/core';
import { Etiqueta } from 'src/app/interfaces/etiqueta';
import { EtiquetaService } from 'src/app/services/etiqueta.service';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-card-etiqueta',
  templateUrl: './card-etiqueta.component.html',
  styleUrls: ['./card-etiqueta.component.scss'],
})
export class CardEtiquetaComponent {
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

  constructor(
    public etiquServ: EtiquetaService,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
  ) {}

  async ngSearch(barcode: string) {
    return new Promise(async resolve => {
      const alert = await this.alertCtrl.create({
        header: 'Cargando',
        message: '<ion-progress-bar type="indeterminate"></ion-progress-bar>'
      });
      await alert.present();

      try {
        const res = await this.etiquServ.getByCodBarra(barcode.trim());
        if (res != null) {
          this.txtTitle = 'Cod: ' + res.codBarra;
          this.data = res;

        } else {
          // Dejar todo vacío
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

          // Instanciar la tostada
          const toast = await this.toastCtrl.create({
            header: 'AVISO',
            message:  'No se ha encontrado la etiqueta escaneada. Dicha etiqueta ' +
                      'todavía no ha sido imprimida desde Anzio.',
            position: 'bottom',
            buttons: [
              {
                text: 'cerrar',
                role: 'cancel'
              }
            ]
          });

          // Mostrar la Tostada esa
          toast.present();
          setTimeout(() => {
            toast.dismiss();
          }, 3000);
        }
      } catch {
        // Instanciar la tostada
        const toast = await this.toastCtrl.create({
          header: 'ERROR 500',
          message:  'El servidor sufrió un error interno mientras se solicitaba la petición, ' +
                    'contacte con el departamento de informática para analizar el origen de este error.',
          position: 'bottom',
          buttons: [
            {
              text: 'cerrar',
              role: 'cancel'
            }
          ]
        });

        // Mostrar la Tostada esa
        toast.present();
      } finally {
        alert.dismiss();
        resolve();
      }
    });
  }
}
