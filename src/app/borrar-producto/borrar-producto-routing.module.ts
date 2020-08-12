import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrarProductoPage } from './borrar-producto.page';

const routes: Routes = [
  {
    path: '',
    component: BorrarProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrarProductoPageRoutingModule {}
