import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UpdateProductoPageRoutingModule } from './update-producto-routing.module';
import { UpdateProductoPage } from './update-producto.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    IonicModule,
    ComponentsModule,
    UpdateProductoPageRoutingModule
  ],
  declarations: [UpdateProductoPage]
})
export class UpdateProductoPageModule {}
