import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardGlobalProductosPageRoutingModule } from './dashboard-global-productos-routing.module';
import { DashboardGlobalProductosPage } from './dashboard-global-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DashboardGlobalProductosPageRoutingModule
  ],
  declarations: [DashboardGlobalProductosPage]
})
export class DashboardGlobalProductosPageModule {}
