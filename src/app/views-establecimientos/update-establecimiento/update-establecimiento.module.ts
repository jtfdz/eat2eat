import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UpdateEstablecimientoPageRoutingModule } from './update-establecimiento-routing.module';
import { UpdateEstablecimientoPage } from './update-establecimiento.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    UpdateEstablecimientoPageRoutingModule
  ],
  entryComponents: [],
  declarations: [UpdateEstablecimientoPage]
})
export class UpdateEstablecimientoPageModule {}
