import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEstablecimientoPage } from './create-establecimiento.page';

const routes: Routes = [
  {
    path: '',
    component: CreateEstablecimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateEstablecimientoPageRoutingModule {}
