import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartphonePage } from './smartphone.page';

const routes: Routes = [
  {
    path: '',
    component: SmartphonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartphonePageRoutingModule {}
