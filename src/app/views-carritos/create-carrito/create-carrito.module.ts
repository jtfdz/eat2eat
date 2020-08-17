import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCarritoPageRoutingModule } from './create-carrito-routing.module';

import { CreateCarritoPage } from './create-carrito.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CreateCarritoPageRoutingModule
  ],
  declarations: [CreateCarritoPage]
})
export class CreateCarritoPageModule {}
