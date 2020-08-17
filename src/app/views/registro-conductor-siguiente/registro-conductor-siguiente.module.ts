import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroConductorSiguientePageRoutingModule } from './registro-conductor-siguiente-routing.module';
import { RegistroConductorSiguientePage } from './registro-conductor-siguiente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroConductorSiguientePageRoutingModule
  ],
  declarations: [RegistroConductorSiguientePage]
})
export class RegistroConductorSiguientePageModule {}
