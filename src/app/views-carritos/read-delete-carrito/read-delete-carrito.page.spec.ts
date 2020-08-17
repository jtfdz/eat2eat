import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReadDeleteCarritoPage } from './read-delete-carrito.page';

describe('ReadDeleteCarritoPage', () => {
  let component: ReadDeleteCarritoPage;
  let fixture: ComponentFixture<ReadDeleteCarritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadDeleteCarritoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadDeleteCarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
