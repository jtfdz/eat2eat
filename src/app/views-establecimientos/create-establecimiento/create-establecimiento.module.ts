import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateEstablecimientoPageRoutingModule } from './create-establecimiento-routing.module';
import { CreateEstablecimientoPage } from './create-establecimiento.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CreateEstablecimientoPageRoutingModule
  ],
  entryComponents: [],
  declarations: [CreateEstablecimientoPage]
})
export class CreateEstablecimientoPageModule {}
