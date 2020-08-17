import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroConductorSiguientePage } from './registro-conductor-siguiente.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroConductorSiguientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroConductorSiguientePageRoutingModule {}
