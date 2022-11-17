import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilEmpresasPageRoutingModule } from './perfil-empresas-routing.module';

import { PerfilEmpresasPage } from './perfil-empresas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilEmpresasPageRoutingModule
  ],
  declarations: [PerfilEmpresasPage]
})
export class PerfilEmpresasPageModule {}
