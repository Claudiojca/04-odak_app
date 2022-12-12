import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfCotizacionPageRoutingModule } from './inf-cotizacion-routing.module';

import { InfCotizacionPage } from './inf-cotizacion.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfCotizacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfCotizacionPage]
})
export class InfCotizacionPageModule {}
