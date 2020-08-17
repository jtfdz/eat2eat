import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateProductoPage } from './create-producto.page';

describe('CreateProductoPage', () => {
  let component: CreateProductoPage;
  let fixture: ComponentFixture<CreateProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
