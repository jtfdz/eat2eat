import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabnavAdministradoraPage } from './tabnav-administradora.page';

describe('TabnavAdministradoraPage', () => {
  let component: TabnavAdministradoraPage;
  let fixture: ComponentFixture<TabnavAdministradoraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabnavAdministradoraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabnavAdministradoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
