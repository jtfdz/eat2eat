import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderPrincipalComponent } from './header-principal/header-principal.component';
import { FruitSpinnerComponent } from './fruit-spinner/fruit-spinner.component';
import { HeaderSecundarioComponent } from './header-secundario/header-secundario.component';
import { VolverInicialComponent } from './volver-inicial/volver-inicial.component';
import { RouterModule } from '@angular/router';

const PAGES_COMPONENTS = [
  HeaderPrincipalComponent,
  HeaderSecundarioComponent,
  FruitSpinnerComponent,
  VolverInicialComponent
];

@NgModule({
  declarations: PAGES_COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  exports: PAGES_COMPONENTS,
   
})
export class ComponentsModule { }
