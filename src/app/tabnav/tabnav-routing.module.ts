import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabnavPage } from './tabnav.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs-nav/dashboard'
  },
  {
    path: 'tabs-nav',
    component: TabnavPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'dashboard-individual',
        loadChildren: () => import('../dashboard-individual/dashboard-individual.module').then( m => m.DashboardIndividualPageModule)
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
