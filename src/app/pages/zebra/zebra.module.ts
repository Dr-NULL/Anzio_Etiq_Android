import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ZebraPageRoutingModule } from './zebra-routing.module';
import { ZebraPage } from './zebra.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZebraPageRoutingModule,
    SharedModule
  ],
  declarations: [
    ZebraPage
  ]
})
export class ZebraPageModule {
}
