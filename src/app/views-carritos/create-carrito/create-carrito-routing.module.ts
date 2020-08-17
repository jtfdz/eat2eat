import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCarritoPage } from './create-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCarritoPageRoutingModule {}
