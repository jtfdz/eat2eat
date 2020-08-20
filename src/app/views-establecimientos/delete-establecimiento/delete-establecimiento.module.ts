import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DeleteEstablecimientoPageRoutingModule } from './delete-establecimiento-routing.module';
import { DeleteEstablecimientoPage } from './delete-establecimiento.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DeleteEstablecimientoPageRoutingModule
  ],
  entryComponents: [],
  declarations: [DeleteEstablecimientoPage]
})
export class DeleteEstablecimientoPageModule {}
