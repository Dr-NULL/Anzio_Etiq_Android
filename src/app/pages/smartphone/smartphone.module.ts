import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SmartphonePageRoutingModule } from './smartphone-routing.module';
import { SmartphonePage } from './smartphone.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartphonePageRoutingModule,
    SharedModule
  ],
  providers: [
    BarcodeScanner
  ],
  declarations: [
    SmartphonePage
  ]
})
export class SmartphonePageModule {}
