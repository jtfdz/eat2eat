import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardLocalProductosPage } from './dashboard-local-productos.page';

describe('DashboardLocalProductosPage', () => {
  let component: DashboardLocalProductosPage;
  let fixture: ComponentFixture<DashboardLocalProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLocalProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardLocalProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
