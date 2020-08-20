import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabnavAdministradoraPage } from './tabnav-administradora.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs-administradora-nav/establecimientos'
  },
  {
    path: 'tabs-administradora-nav',
    component: TabnavAdministradoraPage,
    children: [
      {
	    path: 'conductor',
	    loadChildren: () => import('../views-administradora/conductor/conductor.module').then( m => m.ConductorPageModule)
	  },
	  {
	    path: 'establecimientos',
	    loadChildren: () => import('../views-administradora/establecimientos/establecimientos.module').then( m => m.EstablecimientosPageModule)
	  },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavAdministradoraPageRoutingModule {}
