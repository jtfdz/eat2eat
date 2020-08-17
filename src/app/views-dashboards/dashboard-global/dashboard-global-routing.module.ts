import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardGlobalPage } from './dashboard-global.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardGlobalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardGlobalPageRoutingModule {}
