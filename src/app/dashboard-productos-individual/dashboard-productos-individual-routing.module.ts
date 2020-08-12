import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardProductosIndividualPage } from './dashboard-productos-individual.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardProductosIndividualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardProductosIndividualPageRoutingModule {}
