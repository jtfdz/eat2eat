import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardProductosIndividualPageRoutingModule } from './dashboard-productos-individual-routing.module';

import { DashboardProductosIndividualPage } from './dashboard-productos-individual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardProductosIndividualPageRoutingModule
  ],
  declarations: [DashboardProductosIndividualPage]
})
export class DashboardProductosIndividualPageModule {}
