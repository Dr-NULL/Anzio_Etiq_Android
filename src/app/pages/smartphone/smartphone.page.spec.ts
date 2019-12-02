import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmartphonePage } from './smartphone.page';

describe('SmartphonePage', () => {
  let component: SmartphonePage;
  let fixture: ComponentFixture<SmartphonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmartphonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
