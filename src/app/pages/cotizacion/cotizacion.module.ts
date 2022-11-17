import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotizacionPageRoutingModule } from './cotizacion-routing.module';

import { CotizacionPage } from './cotizacion.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CotizacionPage]
})
export class CotizacionPageModule {}
