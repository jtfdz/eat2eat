import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardLocalPage } from './dashboard-local.page';

describe('DashboardLocalPage', () => {
  let component: DashboardLocalPage;
  let fixture: ComponentFixture<DashboardLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
