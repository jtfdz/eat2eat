import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabnavAdministradoraPageRoutingModule } from './tabnav-administradora-routing.module';

import { TabnavAdministradoraPage } from './tabnav-administradora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabnavAdministradoraPageRoutingModule
  ],
  declarations: [TabnavAdministradoraPage]
})
export class TabnavAdministradoraPageModule {}
