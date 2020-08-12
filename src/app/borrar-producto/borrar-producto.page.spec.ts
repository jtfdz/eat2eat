import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BorrarProductoPage } from './borrar-producto.page';

describe('BorrarProductoPage', () => {
  let component: BorrarProductoPage;
  let fixture: ComponentFixture<BorrarProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BorrarProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
