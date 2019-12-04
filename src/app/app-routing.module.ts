import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CardEtiquetaComponent } from './shared/card-etiqueta/card-etiqueta.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'zebra',
    loadChildren: () => import('./pages/zebra/zebra.module').then( m => m.ZebraPageModule)
  },
  {
    path: 'smartphone',
    loadChildren: () => import('./pages/smartphone/smartphone.module').then( m => m.SmartphonePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
