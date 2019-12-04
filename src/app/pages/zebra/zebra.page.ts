import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

import { CardEtiquetaComponent } from '../../shared/card-etiqueta/card-etiqueta.component';

@Component({
  selector: 'app-zebra',
  templateUrl: './zebra.page.html',
  styleUrls: ['./zebra.page.scss'],
})
export class ZebraPage implements OnInit {
  @ViewChild('search', { static: false }) search: IonInput;
  @ViewChild(CardEtiquetaComponent, { static: false }) etiqueta: CardEtiquetaComponent;

  public txtSearch = '';

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.search.setFocus();
    }, 500);
  }

  async onSearchKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.txtSearch = this.txtSearch.trim();
      await new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 250);
      });

      await this.etiqueta.ngSearch(this.txtSearch);
      setTimeout(() => {
        this.search.setFocus();
        this.txtSearch = '';
      }, 500);
    }
  }
}
