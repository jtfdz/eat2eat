import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardGlobalPageRoutingModule } from './dashboard-global-routing.module';
import { DashboardGlobalPage } from './dashboard-global.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardGlobalPageRoutingModule
  ],
  declarations: [DashboardGlobalPage]
})
export class DashboardGlobalPageModule {}
