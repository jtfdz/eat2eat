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
    path: 'editar-establecimiento/:id',
    loadChildren: () => import('./editar-establecimiento/editar-establecimiento.module').then( m => m.EditarEstablecimientoPageModule)
  },
  {
    path: 'borrar-establecimiento/:id',
    loadChildren: () => import('./borrar-establecimiento/borrar-establecimiento.module').then( m => m.BorrarEstablecimientoPageModule)
  },
  {
    path: 'editar-producto/:id',
    loadChildren: () => import('./editar-producto/editar-producto.module').then( m => m.EditarProductoPageModule)
  },
  {
    path: 'borrar-producto/:id',
    loadChildren: () => import('./borrar-producto/borrar-producto.module').then( m => m.BorrarProductoPageModule)
  },
  {
    path: 'dashboard-productos/:id',
    loadChildren: () => import('./dashboard-productos/dashboard-productos.module').then( m => m.DashboardProductosPageModule)
  },   {
    path: 'dashboard-productos-individual/:id',
    loadChildren: () => import('./dashboard-productos-individual/dashboard-productos-individual.module').then( m => m.DashboardProductosIndividualPageModule)
  },
  {
    path: 'crear-producto/:id',
    loadChildren: () => import('./crear-producto/crear-producto.module').then( m => m.CrearProductoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
