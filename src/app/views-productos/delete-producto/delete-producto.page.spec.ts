import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteProductoPage } from './delete-producto.page';

describe('DeleteProductoPage', () => {
  let component: DeleteProductoPage;
  let fixture: ComponentFixture<DeleteProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
