import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateEstablecimientoPage } from './update-establecimiento.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateEstablecimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateEstablecimientoPageRoutingModule {}
