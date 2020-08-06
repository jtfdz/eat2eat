import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrarEstablecimientoPageRoutingModule } from './borrar-establecimiento-routing.module';

import { BorrarEstablecimientoPage } from './borrar-establecimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrarEstablecimientoPageRoutingModule
  ],
  declarations: [BorrarEstablecimientoPage]
})
export class BorrarEstablecimientoPageModule {}
