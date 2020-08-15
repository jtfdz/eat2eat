import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CrearEstablecimientoPageRoutingModule } from './crear-establecimiento-routing.module';
import { CrearEstablecimientoPage } from './crear-establecimiento.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    FormsModule,
    IonicModule,
    CrearEstablecimientoPageRoutingModule
  ],
  declarations: [CrearEstablecimientoPage]
})
export class CrearEstablecimientoPageModule {}
