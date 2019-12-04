import { Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { CardEtiquetaComponent } from '../../shared/card-etiqueta/card-etiqueta.component';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.page.html',
  styleUrls: ['./smartphone.page.scss'],
})
export class SmartphonePage implements OnInit {
  @ViewChild(CardEtiquetaComponent, { static: true }) cardEtiqueta: CardEtiquetaComponent;

  constructor(
    private scannerCtrl: BarcodeScanner,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async scanNow() {
    // Consultar
    try {
      const code = await this.scannerCtrl.scan();
      this.cardEtiqueta.ngSearch(code.text);
    } catch {
      // Instanciar la tostada
      const toast = await this.toastCtrl.create({
        header: 'ERROR',
        message:  'La cámara del dispositivo no se encuentra disponible.',
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
  }
}
