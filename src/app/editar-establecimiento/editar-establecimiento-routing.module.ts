import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarEstablecimientoPage } from './editar-establecimiento.page';

const routes: Routes = [
  {
    path: '',
    component: EditarEstablecimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarEstablecimientoPageRoutingModule {}
