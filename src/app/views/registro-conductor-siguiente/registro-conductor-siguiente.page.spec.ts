import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroConductorSiguientePage } from './registro-conductor-siguiente.page';

describe('RegistroConductorSiguientePage', () => {
  let component: RegistroConductorSiguientePage;
  let fixture: ComponentFixture<RegistroConductorSiguientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroConductorSiguientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroConductorSiguientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
