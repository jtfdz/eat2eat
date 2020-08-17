import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateCarritoPage } from './create-carrito.page';

describe('CreateCarritoPage', () => {
  let component: CreateCarritoPage;
  let fixture: ComponentFixture<CreateCarritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCarritoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
