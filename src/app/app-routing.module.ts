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
    path: 'tabnav',
    loadChildren: () => import('./tabnav/tabnav.module').then( m => m.TabnavPageModule)
  },
  {
    path: 'maps/:id',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'registro-conductor',
    loadChildren: () => import('./views/registro-conductor/registro-conductor.module').then( m => m.RegistroConductorPageModule)
  },
  {
    path: 'login-usuario',
    loadChildren: () => import('./views/login-usuario/login-usuario.module').then( m => m.LoginUsuarioPageModule)
  },
  {
    path: 'registro-conductor-siguiente',
    loadChildren: () => import('./views/registro-conductor-siguiente/registro-conductor-siguiente.module').then( m => m.RegistroConductorSiguientePageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./views/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'create-establecimiento',
    loadChildren: () => import('./views-establecimientos/create-establecimiento/create-establecimiento.module').then( m => m.CreateEstablecimientoPageModule)
  },
  {
    path: 'delete-establecimiento/:id',
    loadChildren: () => import('./views-establecimientos/delete-establecimiento/delete-establecimiento.module').then( m => m.DeleteEstablecimientoPageModule)
  },
  {
    path: 'update-establecimiento/:id',
    loadChildren: () => import('./views-establecimientos/update-establecimiento/update-establecimiento.module').then( m => m.UpdateEstablecimientoPageModule)
  },
  {
    path: 'create-producto/:id',
    loadChildren: () => import('./views-productos/create-producto/create-producto.module').then( m => m.CreateProductoPageModule)
  },
  {
    path: 'delete-producto/:id',
    loadChildren: () => import('./views-productos/delete-producto/delete-producto.module').then( m => m.DeleteProductoPageModule)
  },
  {
    path: 'update-producto/:id',
    loadChildren: () => import('./views-productos/update-producto/update-producto.module').then( m => m.UpdateProductoPageModule)
  },
  {
    path: 'dashboard-local-productos/:id',
    loadChildren: () => import('./views-dashboards/dashboard-local-productos/dashboard-local-productos.module').then( m => m.DashboardLocalProductosPageModule)
  },
  {
    path: 'dashboard-global-productos/:id',
    loadChildren: () => import('./views-dashboards/dashboard-global-productos/dashboard-global-productos.module').then( m => m.DashboardGlobalProductosPageModule)
  },
  {
    path: 'create-carrito',
    loadChildren: () => import('./views-carritos/create-carrito/create-carrito.module').then( m => m.CreateCarritoPageModule)
  },
  {
    path: 'read-delete-carrito',
    loadChildren: () => import('./views-carritos/read-delete-carrito/read-delete-carrito.module').then( m => m.ReadDeleteCarritoPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
