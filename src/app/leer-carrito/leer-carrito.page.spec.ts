import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeerCarritoPage } from './leer-carrito.page';

describe('LeerCarritoPage', () => {
  let component: LeerCarritoPage;
  let fixture: ComponentFixture<LeerCarritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerCarritoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeerCarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
