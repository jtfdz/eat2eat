import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteEstablecimientoPage } from './delete-establecimiento.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteEstablecimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteEstablecimientoPageRoutingModule {}
