import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarEstablecimientoPage } from './editar-establecimiento.page';

describe('EditarEstablecimientoPage', () => {
  let component: EditarEstablecimientoPage;
  let fixture: ComponentFixture<EditarEstablecimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEstablecimientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarEstablecimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
