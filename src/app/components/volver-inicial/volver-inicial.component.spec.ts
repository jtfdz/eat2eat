import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VolverInicialComponent } from './volver-inicial.component';

describe('VolverInicialComponent', () => {
  let component: VolverInicialComponent;
  let fixture: ComponentFixture<VolverInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolverInicialComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VolverInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
