import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardGlobalProductosPage } from './dashboard-global-productos.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardGlobalProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardGlobalProductosPageRoutingModule {}
