import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfCotizacionPage } from './inf-cotizacion.page';

const routes: Routes = [
  {
    path: '',
    component: InfCotizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfCotizacionPageRoutingModule {}
