import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabnavPage } from './tabnav.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs-nav/dashboard-global'
  },
  {
    path: 'tabs-nav',
    component: TabnavPage,
    children: [
      {
        path: 'dashboard-global',
        loadChildren: () => import('../views-dashboards/dashboard-global/dashboard-global.module').then( m => m.DashboardGlobalPageModule)
      },
      {
        path: 'dashboard-local',
        loadChildren: () => import('../views-dashboards/dashboard-local/dashboard-local.module').then( m => m.DashboardLocalPageModule)
      }, 
    ],
  }
];

@NgModule({
   imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}
