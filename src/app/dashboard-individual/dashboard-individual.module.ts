import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardIndividualPageRoutingModule } from './dashboard-individual-routing.module';
import { DashboardIndividualPage } from './dashboard-individual.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    IonicModule,
    DashboardIndividualPageRoutingModule
  ],
  declarations: [DashboardIndividualPage]
})
export class DashboardIndividualPageModule {}
