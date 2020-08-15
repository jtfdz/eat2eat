import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearCarritoPage } from './crear-carrito.page';

describe('CrearCarritoPage', () => {
  let component: CrearCarritoPage;
  let fixture: ComponentFixture<CrearCarritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCarritoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearCarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
