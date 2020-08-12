import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrarProductoPageRoutingModule } from './borrar-producto-routing.module';

import { BorrarProductoPage } from './borrar-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrarProductoPageRoutingModule
  ],
  declarations: [BorrarProductoPage]
})
export class BorrarProductoPageModule {}
