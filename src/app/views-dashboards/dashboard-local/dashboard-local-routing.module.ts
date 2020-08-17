import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardLocalPage } from './dashboard-local.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardLocalPageRoutingModule {}
