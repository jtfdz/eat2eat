import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearEstablecimientoPage } from './crear-establecimiento.page';

describe('CrearEstablecimientoPage', () => {
  let component: CrearEstablecimientoPage;
  let fixture: ComponentFixture<CrearEstablecimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEstablecimientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearEstablecimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
