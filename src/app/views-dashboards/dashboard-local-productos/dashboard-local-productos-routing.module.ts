import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardLocalProductosPage } from './dashboard-local-productos.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardLocalProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardLocalProductosPageRoutingModule {}
