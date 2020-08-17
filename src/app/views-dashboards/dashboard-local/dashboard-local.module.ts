import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardLocalPageRoutingModule } from './dashboard-local-routing.module';

import { DashboardLocalPage } from './dashboard-local.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    DashboardLocalPageRoutingModule
  ],
  declarations: [DashboardLocalPage]
})
export class DashboardLocalPageModule {}
