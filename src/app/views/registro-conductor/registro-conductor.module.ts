import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroConductorPageRoutingModule } from './registro-conductor-routing.module';
import { RegistroConductorPage } from './registro-conductor.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RegistroConductorPageRoutingModule
  ],
  declarations: [RegistroConductorPage]
})
export class RegistroConductorPageModule {}
