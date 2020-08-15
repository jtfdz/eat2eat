import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CrearCarritoPageRoutingModule } from './crear-carrito-routing.module';
import { CrearCarritoPage } from './crear-carrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,       
    IonicModule,
    CrearCarritoPageRoutingModule
  ],
  declarations: [CrearCarritoPage]
})
export class CrearCarritoPageModule {}
