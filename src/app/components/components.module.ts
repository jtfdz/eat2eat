import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderPrincipalComponent } from './header-principal/header-principal.component';
import { FruitSpinnerComponent } from './fruit-spinner/fruit-spinner.component';
import { HeaderSecundarioComponent } from './header-secundario/header-secundario.component';
import { BotonCarritoComponent } from './boton-carrito/boton-carrito.component';

const PAGES_COMPONENTS = [
  HeaderPrincipalComponent,
  HeaderSecundarioComponent,
  FruitSpinnerComponent,
  BotonCarritoComponent
];

@NgModule({
  declarations: PAGES_COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: PAGES_COMPONENTS,
   
})
export class ComponentsModule { }
