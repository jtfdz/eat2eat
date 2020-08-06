import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarEstablecimientoPageRoutingModule } from './editar-establecimiento-routing.module';

import { EditarEstablecimientoPage } from './editar-establecimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarEstablecimientoPageRoutingModule
  ],
  declarations: [EditarEstablecimientoPage]
})
export class EditarEstablecimientoPageModule {}
