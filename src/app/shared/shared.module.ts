import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CardEtiquetaComponent } from './card-etiqueta/card-etiqueta.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    CardEtiquetaComponent
  ],
  exports: [
    CardEtiquetaComponent
  ]
})
export class SharedModule { }
