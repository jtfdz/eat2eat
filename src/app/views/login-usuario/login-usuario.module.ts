import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginUsuarioPageRoutingModule } from './login-usuario-routing.module';
import { LoginUsuarioPage } from './login-usuario.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    LoginUsuarioPageRoutingModule
  ],
  declarations: [LoginUsuarioPage]
})
export class LoginUsuarioPageModule {}
