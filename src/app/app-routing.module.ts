import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  // },
  {
    path: 'tabnav',
    loadChildren: () => import('./tabnav/tabnav.module').then( m => m.TabnavPageModule)
  },
  {
    path: 'crear-establecimiento',
    loadChildren: () => import('./crear-establecimiento/crear-establecimiento.module').then( m => m.CrearEstablecimientoPageModule)
  },
  {
    path: 'editar-establecimiento',
    loadChildren: () => import('./editar-establecimiento/editar-establecimiento.module').then( m => m.EditarEstablecimientoPageModule)
  },
  {
    path: 'borrar-establecimiento',
    loadChildren: () => import('./borrar-establecimiento/borrar-establecimiento.module').then( m => m.BorrarEstablecimientoPageModule)
  },
  // {
  //   path: 'dashboard-individual',
  //   loadChildren: () => import('./dashboard-individual/dashboard-individual.module').then( m => m.DashboardIndividualPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
