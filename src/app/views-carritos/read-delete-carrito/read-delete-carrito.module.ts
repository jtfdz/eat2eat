import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReadDeleteCarritoPageRoutingModule } from './read-delete-carrito-routing.module';
import { ReadDeleteCarritoPage } from './read-delete-carrito.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReadDeleteCarritoPageRoutingModule
  ],
  declarations: [ReadDeleteCarritoPage]
})
export class ReadDeleteCarritoPageModule {}
