import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstablecimientosPage } from './establecimientos.page';

describe('EstablecimientosPage', () => {
  let component: EstablecimientosPage;
  let fixture: ComponentFixture<EstablecimientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablecimientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstablecimientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
