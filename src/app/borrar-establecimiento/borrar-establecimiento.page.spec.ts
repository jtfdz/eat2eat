import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BorrarEstablecimientoPage } from './borrar-establecimiento.page';

describe('BorrarEstablecimientoPage', () => {
  let component: BorrarEstablecimientoPage;
  let fixture: ComponentFixture<BorrarEstablecimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarEstablecimientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BorrarEstablecimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
