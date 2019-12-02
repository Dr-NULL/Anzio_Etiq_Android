import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartphonePageRoutingModule } from './smartphone-routing.module';

import { SmartphonePage } from './smartphone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartphonePageRoutingModule
  ],
  declarations: [SmartphonePage]
})
export class SmartphonePageModule {}
