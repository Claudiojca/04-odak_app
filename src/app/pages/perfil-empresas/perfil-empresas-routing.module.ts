import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilEmpresasPage } from './perfil-empresas.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilEmpresasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilEmpresasPageRoutingModule {}
