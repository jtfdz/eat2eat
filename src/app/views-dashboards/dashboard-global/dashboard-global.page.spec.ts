import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardGlobalPage } from './dashboard-global.page';

describe('DashboardGlobalPage', () => {
  let component: DashboardGlobalPage;
  let fixture: ComponentFixture<DashboardGlobalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGlobalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardGlobalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
