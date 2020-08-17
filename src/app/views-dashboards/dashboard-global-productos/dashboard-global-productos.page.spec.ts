import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardGlobalProductosPage } from './dashboard-global-productos.page';

describe('DashboardGlobalProductosPage', () => {
  let component: DashboardGlobalProductosPage;
  let fixture: ComponentFixture<DashboardGlobalProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGlobalProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardGlobalProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
