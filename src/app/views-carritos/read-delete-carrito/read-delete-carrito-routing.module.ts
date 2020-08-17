import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadDeleteCarritoPage } from './read-delete-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: ReadDeleteCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadDeleteCarritoPageRoutingModule {}
