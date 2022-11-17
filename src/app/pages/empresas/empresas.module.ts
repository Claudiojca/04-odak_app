import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresasPageRoutingModule } from './empresas-routing.module';

import { EmpresasPage } from './empresas.page';
import { ComponentsModule } from '../../components/components.module';
import { SwiperModule } from 'swiper/angular';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresasPageRoutingModule,
    ComponentsModule,
    SwiperModule,
    PipesModule
  ],
  declarations: [EmpresasPage]
})
export class EmpresasPageModule {}
