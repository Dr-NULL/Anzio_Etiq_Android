import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZebraPage } from './zebra.page';

describe('ZebraPage', () => {
  let component: ZebraPage;
  let fixture: ComponentFixture<ZebraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZebraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZebraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
