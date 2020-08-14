import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerCarritoPage } from './leer-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: LeerCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerCarritoPageRoutingModule {}
