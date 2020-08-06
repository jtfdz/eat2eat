import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrarEstablecimientoPage } from './borrar-establecimiento.page';

const routes: Routes = [
  {
    path: '',
    component: BorrarEstablecimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrarEstablecimientoPageRoutingModule {}
