import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCarritoPage } from './crear-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCarritoPageRoutingModule {}
