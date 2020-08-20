import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardLocalProductosPageRoutingModule } from './dashboard-local-productos-routing.module';
import { DashboardLocalProductosPage } from './dashboard-local-productos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DashboardLocalProductosPageRoutingModule
  ],
  declarations: [DashboardLocalProductosPage]
})
export class DashboardLocalProductosPageModule {}
