import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UpdateEstablecimientoPageRoutingModule } from './update-establecimiento-routing.module';
import { UpdateEstablecimientoPage } from './update-establecimiento.page';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateEstablecimientoPageRoutingModule
  ],
  declarations: [UpdateEstablecimientoPage]
})
export class UpdateEstablecimientoPageModule {}
